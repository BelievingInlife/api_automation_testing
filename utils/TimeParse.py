from datetime import datetime


def time_parse():
    date_time = datetime.now()
    time_str = date_time.strftime('%Y-%m-%d %H:%M:%S.%f')[:-3]
    return time_str