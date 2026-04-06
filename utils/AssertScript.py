import jsonpath
from requests import Response

from utils.TestLogger import insert_log


def all_assert(source_data, target_data):
    print(f'move in all_assert function')
    insert_log("all_assert assert body", f"{source_data} and {target_data}")
    source_datas = source_data.get('response_assert', None)
    # print(source_datas)
    # target_date 格式化，方便提取
    if isinstance(target_data, Response):
        target_data = target_data.json()

    # print(target_data)
    if source_datas is not None:
        for data in source_datas:
            for key, value in data.items():
                # print(f'{key}: {value[0]}')
                if key == 'eq':
                    jsonpath_result = jsonpath.search(value[0], target_data)
                    assert value[1] == jsonpath_result[0],\
                        f'{value[1]} not {key} {jsonpath_result[0]}'


#
# if __name__ == '__main__':
#     all_assert({"response_assert" : [{'eq': ['$.status', 200]}, {'eq': ['$.message', '登录成功']}]},
#                {'message': 'Login Successful', 'status': 200, 'token': '1234567890abcdefgh'})
#     str_value = '{"message": "Wrong username or password", "status": 200}'
#
#     json_value = json.loads(str_value)
#     print(parse('$.message').find(json_value)[0].value)