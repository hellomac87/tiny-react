import { createElement, render } from "./react";

<div id="root">
  <span>blabla</span>
</div>;

// 이렇게 생긴게 버추얼 돔 아닐까?
/*
{
    tagName:"div",
    props: {
        id:"root",
        className:'container',
    },
    children: [
        tagName:"span",
        props: {},
        children: [
            'blabla'
        ]
    ]
}
*/
