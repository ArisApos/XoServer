#! /bin/sh

# CONTAINER_ALREADY_STARTED="CONTAINER_ALREADY_STARTED_PLACEHOLDER"
# if [ ! -e $CONTAINER_ALREADY_STARTED ]; then
#     touch $CONTAINER_ALREADY_STARTED
#     echo "-- First container startup --"
#     # YOUR_JUST_ONCE_LOGIC_HERE
# else
#     echo "-- Not first container startup --"
# fi

# Tells the shell, im ending the script shell please pass the execution to the rest of my command line witch is the my sequal Deamon
# DO NOT STOP!
# echo "MONGO STARTING!!"
# exec "$@"

#         mongodump /mongoBackup/
#         mongorestore /mongoBackup/xoDb/*.bson