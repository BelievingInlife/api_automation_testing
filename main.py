import os

import pytest
from allure_combine import combine_allure

pytest_args = [
    "-v","-s","--capture=sys",
    "--clean-alluredir",
    "--alluredir=allure-results",
    "./core/TestRunning.py"
]

pytest.main(pytest_args)

os.system("allure generate allure-results -o allure-report -c")

combine_allure("./allure-report")