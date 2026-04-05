import allure
import pytest

import copy

import yaml
from jinja2 import Template
import requests

from core.GlobalContext import GlobalContext
from custom_script.BusinessKeyWords import BusinessKeyWords
from keywords.ApiKeyWords import ApiKeyWords

from read_case.YamlReadCase import create_test_case

class TestRunning:

    test_cases = create_test_case('./test_case/yaml')

    @pytest.mark.parametrize('case_file', test_cases)
    def test_case_running(self, case_file):
        # print(GlobalContext().show_global_context())

        case_steps = copy.deepcopy(case_file.get('case_steps'))
        base_info = case_file.get('base_info')
        test_data = copy.deepcopy(case_file.get('test_data'))
        test_data.update(GlobalContext().show_global_context())

        # allure feature
        allure.dynamic.feature(base_info['module'])
        # allure story
        allure.dynamic.story(base_info['title'])
        #allure title
        # allure.title(base_info['case_name'])

        # test step Template render
        parse_case_step = yaml.safe_load(Template(str(case_steps)).render(test_data))

        for case_step in parse_case_step:
            print(case_step['url'])
            # print(f'{case_step}')
            with allure.step(case_step.get("request_name")):
                function_name = case_step.get("function_name", None)
                if function_name is None:
                    # print(function_name)
                    method_name = case_step.get("method", None)
                    # print(f'{method_name}')
                    if method_name == 'POST': case_step["function_name"] = 'http_post_request'
                    if method_name == 'GET': case_step["function_name"] = 'http_get_request'
                # print(case_step["function_name"])
                try:
                    keyword = ApiKeyWords(requests).__getattribute__(case_step.get('function_name'))
                    response = keyword(**case_step).json()
                except AttributeError:
                    # 扩展的关键字
                    keyword = BusinessKeyWords(requests).__getattribute__(case_step.get('function_name'))
                    response = keyword(**case_step).json()
                finally:
                    allure.attach(
                        body=str(case_step.get("body")),
                        name="请求参数",
                        attachment_type = allure.attachment_type.JSON
                    )
                    allure.attach(
                        body=str(response),
                        name="响应参数",
                        attachment_type=allure.attachment_type.JSON
                    )






