import unittest
import sys
import os
from pathlib import Path

def run_tests():
    # Находим все Python тест-файлы
    test_dir = Path(__file__).parent
    test_loader = unittest.TestLoader()
    
    # Загружаем тесты из всех файлов *_test.py
    test_suite = test_loader.discover(str(test_dir), pattern="*_test.py")
    
    # Запускаем тесты
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(test_suite)
    
    # Возвращаем статус выполнения
    return 0 if result.wasSuccessful() else 1

if __name__ == '__main__':
    sys.exit(run_tests())