import { createComponent } from '@lit-labs/react';
import { StudsPagination as StudsPaginationClass } from '@studs/ui';
import React from 'react';

// pagination

const StudsPagination = createComponent({
    tagName: 'studs-pagination',
    elementClass: StudsPaginationClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
        onChangePage: "changePage",
        onChangeItemsPerPage: "changeItemsPerPage"
    },
});

export default StudsPagination;