#!/bin/bash
/usr/local/bin/redis-cli flushall
curl -X POST http://localhost:6001/deleteeverything
forever restartall
