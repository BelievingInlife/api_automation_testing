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
from utils.TestLogger import step_with_logger


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

            with step_with_logger(case_step.get("deception")):

                function_name = case_step.get("function_name", None)
                print(case_step.get("deception"))
                if function_name is None:
                    method_name = case_step.get("method", None)
                    if method_name == 'POST': case_step["function_name"] = 'http_post_request'
                    if method_name == 'GET': case_step["function_name"] = 'http_get_request'

                try:
                    keyword = ApiKeyWords(requests).__getattribute__(case_step.get('function_name'))
                    keyword(**case_step)
                except AttributeError:
                    # 扩展的关键字
                    keyword = BusinessKeyWords(requests).__getattribute__(case_step.get('function_name'))
                    keyword(**case_step)
                except Exception:
                    raise






