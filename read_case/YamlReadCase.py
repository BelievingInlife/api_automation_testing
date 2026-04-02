
import os
import re
import uuid

import copy
import yaml

from core.GlobalContext import GlobalContext


def load_global_config():
    config_file_path = os.getcwd()
    config_file_path = os.path.join(config_file_path, 'config/config.yaml')
    with open(config_file_path, 'r', encoding='utf-8') as f:
        data = yaml.safe_load(f)
        # print(data)
        GlobalContext().set_global_context_dict(dict_value=data)
        print(GlobalContext().show_global_context())


def reader_case_file(folder_path):
    load_test_cases = []

    load_global_config()

    case_folders = os.listdir(folder_path)

    case_folders = \
        [(int(i.split('_')[0]), i) for i in case_folders if re.match(r'^\d+_.*\.yaml$', i)]

    # sort case name
    case_folders.sort()
    case_folders = [i[-1] for i in case_folders]
    print(f"yaml用例文件: {case_folders}")

    # read case files content
    for case_folder in case_folders:
        with open(os.path.join(folder_path, case_folder), 'r', encoding='utf-8') as f:
            load_test_cases.append(yaml.safe_load(f))

    return load_test_cases




def create_test_case(test_case_path):
    new_cases = []

    all_test_case = reader_case_file(test_case_path)

    for test_case in all_test_case:
        ddts = test_case.get('test_datas', [])
        if len(ddts) == 0:
            case_name = f"【{test_case.get('base_info').get('module')}】{test_case.get('title')}"
            test_case.get('base_info').update({'title': case_name})
            new_cases.append(test_case)
        else:
            for ddt in ddts:
                parse_case = copy.deepcopy(test_case)
                module_name = parse_case.get('base_info').get('module')
                title = parse_case.get('base_info').get('title', uuid.uuid4().__str__())
                case_name = ddt.get('case_name', uuid.uuid4().__str__())
                expected01 = ddt.get('expected01', uuid.uuid4().__str__())
                case_name = f'【{module_name}】【{title}】{case_name}, {expected01}'
                parse_case.get('base_info').update({'title': case_name})
                parse_case.pop('test_datas')
                parse_case.update({'test_data': ddt})
                new_cases.append(parse_case)
    return new_cases



if __name__ == '__main__':
    # print(reader_case_file("../test_case/yaml"))
    # # load_global_config('config/config.yaml')
    # print(os.path.join('api_automation_test'))
    # print(create_test_case('../test_case/yaml'))
    pass