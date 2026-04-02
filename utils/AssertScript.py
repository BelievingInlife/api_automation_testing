import json
from jsonpath_ng import parse
from requests import Response


def all_assert(source_data, target_data):
    print(f'====>>> move in all_assert function')
    source_datas = source_data.get('response_assert', None)
    # print(source_datas)
    # target_date 格式化，方便提取
    if isinstance(target_data, Response):
        target_data = target_data.json()

    if source_datas is not None:
        for data in source_datas:
            key = list(data.keys())[0]
            value = list(data.values())[0]
            if key == 'eq':
                # print(f'{value[1]} not {key} {parse(value[0]).find(target_data)[0].value}')
                assert str(value[1]).strip() == str(parse(value[0]).find(target_data)[0].value).strip(),\
                    f'{value[1]} not {key} {parse(value[0]).find(target_data)[0].value}'



# if __name__ == '__main__':
#     str_value = '{"message": "Wrong username or password", "status": 200}'
#
#     json_value = json.loads(str_value)
#     print(parse('$.message').find(json_value)[0].value)