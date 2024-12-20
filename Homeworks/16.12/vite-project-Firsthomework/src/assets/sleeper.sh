#!/bin/bash

# 1. 10 раз с интервалом 5 секунд пишем дату и количество процессов
for i in {1..10}; do
  echo "$(date +"%H:%M:%S") $(ps -ef | wc -l)"
  sleep 5
done

# 2. Записываем информацию о процессоре в файл
cat /proc/cpuinfo > cpuinfo.txt

# 3. Записываем имя операционной системы (полная строка с NAME=)
grep "^NAME=" /etc/os-release > os_name_full.txt

# 4. Записываем только имя ОС без слова NAME=
grep "^NAME=" /etc/os-release | awk -F= '{print $2}' | tr -d '"' > os_name.txt

# 5. Создаем 50 файлов с именами от 50.txt до 100.txt
for i in {50..100}; do
  touch "${i}.txt"
done
