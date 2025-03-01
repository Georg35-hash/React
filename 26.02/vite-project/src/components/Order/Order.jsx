import { useState } from "react";
import { Modal, Box, TextField, Button, Typography, Snackbar, Alert } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Order({ open, onClose }) {
    const [successMessage, setSuccessMessage] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log("Order details:", data);
        setSuccessMessage(true);
        reset();
        onClose();
    };

    return (
        <>
            {/* Modal window */}
            <Modal open={open} onClose={onClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Make order
                    </Typography>

                    {/* Форма */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            fullWidth
                            label="Name"
                            {...register("name", { required: "Enter name" })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            {...register("email", {
                                required: "Enter email",
                                pattern: { value: /^\S+@\S+\.\S+$/, message: "Worng email" },
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Phone number"
                            type="tel"
                            {...register("phone", {
                                required: "Enter number of phone",
                                pattern: { value: /^\+?\d{10,15}$/, message: "Wrong number" },
                            })}
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            sx={{ mb: 2 }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Order
                        </Button>
                    </form>
                </Box>
            </Modal>

            {/* Notification*/}
            <Snackbar
                open={successMessage}
                autoHideDuration={3000}
                onClose={() => setSuccessMessage(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={() => setSuccessMessage(false)} severity="success">
                    You have successfully made an order!
                </Alert>
            </Snackbar>

        </>
    );
}
