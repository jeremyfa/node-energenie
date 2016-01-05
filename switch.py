#!/usr/bin/python

import sys
from energenie import switch_on, switch_off

if len(sys.argv) == 3:
    if sys.argv[1] == 'on':
        print "switch #"+str(int(sys.argv[2]))+" on"
        switch_on(int(sys.argv[2]))
    elif sys.argv[1] == 'off':
        print "switch #"+str(int(sys.argv[2]))+" off"
        switch_off(int(sys.argv[2]))
else:
    print "missing argument"
