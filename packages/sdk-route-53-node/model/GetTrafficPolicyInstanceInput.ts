import {Structure as _Structure_} from '@aws/types';

export const GetTrafficPolicyInstanceInput: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Id',
        },
    },
};