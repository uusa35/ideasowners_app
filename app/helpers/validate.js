/**
 * Created by usamaahmed on 1/9/17.
 */
import React from 'react';


export function isRequired(element) {
    if (element.length <= 0) {
        return false
    }
    return true;
}