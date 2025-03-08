import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../src/redux/actions";

export function Filter({ filter, setFilter }) {
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}
// Функция mapStateToProps связывает состояние Redux с пропсами компонента.
// Она извлекает значение фильтра из глобального состояния (state.filter) и передает его в компонент как пропс.
const mapStateToProps = (state) => ({ filter: state.filter });
// Функция mapDispatchToProps связывает действия (dispatch) с пропсами компонента.
// В данном случае setFilter — это функция-обработичк действия, которая отправляется для обновления фильтра в Redux.
const mapDispatchToProps = { setFilter };
// А здесь мы конектим наши функции и компонент филтр и экспортируем их для дальнейшего использ в других компонентах
// Это позволяет компоненту получать filter из Redux и вызывать setFilter для его обновления.
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
