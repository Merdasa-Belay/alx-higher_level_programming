#!/usr/bin/python3
def print_sorted_dictionary(a_dictionary):
    list_ord = list(a_dictionary.keys())
    list_ord.sort()
    for i in list_ord:
        print(f"{i}: {a_dictionary.get(i)}".format(i, a_dictionary.get(i)))
