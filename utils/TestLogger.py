from contextlib import contextmanager

import allure
from loguru import logger
import io

from utils.TimeParse import time_parse


class TestLogger():

    def __init__(self):
        self.log_buffer = io.StringIO()
        self.sink_id = None

    def __enter__(self):
        self.sink_id = logger.add(self.log_buffer, level="DEBUG")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        logger.remove(self.sink_id)
        log_context = self.log_buffer.getvalue()

        if log_context.strip():
            allure.attach(
                body = log_context,
                name = "step_log",
                attachment_type = allure.attachment_type.TEXT
            )
        self.log_buffer.close()

@contextmanager
def step_with_logger(step_name):
    with allure.step(step_name):
        with TestLogger() as logs:
            yield logs



def insert_log(data_name, data = None):
    logger.debug(f"---- Log {data_name}:START ----")
    logger.debug(f"[ {time_parse()} ] : {data_name}={data}")
    logger.debug(f"---- Log {data_name}:END ----")