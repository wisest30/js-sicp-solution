// 부서마다 record 형식이 다르니 부서 정보를 포함한 record 를 리턴한다.
function get_record(name, file) {
    division = get_division_from_file(file)
    // 부서마다 file 에서 정보를 얻는 방식이 다르다.
    record = get("get_record", division)(name)
    // 없는 직원이면 null 리턴
    return is_null(record) ? null : make_division_record(division, record)
}

function get_salary(division_record) {
    division = get_division_from_division_record(division_record)
    return get("get_salary", division)(division_record)
}

function find_employee_record(name, files) {
    record = is_null(files) ? null : get_record(name, head(files))
    return is_null(record) ? find_employee_record(name, tail(files)) : record
}

// d. install 함수 수정하여 function table 갱신.
