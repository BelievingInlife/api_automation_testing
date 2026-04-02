
class GlobalContext:
    _global_context = {}


    def get_global_context(self, key):
        return self._global_context.get(key, None)

    def set_global_context_dict(self, dict_value):
        self._global_context.update(dict_value)

    def set_global_context_key(self, key, value):
        self._global_context[key] = value

    def show_global_context(self):
        return self._global_context