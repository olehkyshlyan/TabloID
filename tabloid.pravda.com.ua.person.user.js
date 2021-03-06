// ==UserScript==
// @name         TabloID | Person
// @namespace    http://tabloid.pravda.com.ua/
// @noframes
// @version      0.1
// @description  TabloID | pravda.com.ua | Person
// @author       oleh.kyshlyan
// @match        http://tabloid.pravda.com.ua/person/*
// @match        https://tabloid.pravda.com.ua/person/*
// @grant        none
// ==/UserScript==

var TabloIDPerson = new function(){
  this.bodyBackgroundStyle = function(){
    var body = document.body;
    var bodyBgrStInclosure = function(){
      //body.style.backgroundColor = 'transparent';
      body.style.backgroundImage = 'none';
      body.style.backgroundRepeat = 'repeat';
      body.style.backgroundAttachment = 'scroll';
      body.style.backgroundPosition = '0% 0%';
    }
    setTimeout(bodyBgrStInclosure,2000);
  }

  this.main2Form = function(){
    var main2 = document.getElementById('main2');
    var form = main2.children[0];
    if(form != undefined && form.tagName == 'FORM'){
      var formCSSStyle = window.getComputedStyle(form);
      var formMarginTop = formCSSStyle.getPropertyValue("margin-top");
      if(formMarginTop == '2px'){
        form.style.marginTop = '4px';
      }
    }
  }

  this.ttZeroElChildren = function(){
    var ttCollection = document.getElementsByClassName('tt');
    var ttZeroEl = ttCollection[0];
    var ttZeroElChildren = ttZeroEl.children;
    var ttZrElChLen = ttZeroElChildren.length;

    for(var i=0; i<ttZrElChLen; i++){
      var currEl = ttZeroElChildren[i];

      if(currEl.id.indexOf('admixer') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.id.indexOf('adnet') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.id.indexOf('go2net') != -1){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt2ZeroElParentChildren = function(){
    var tt2Collection = document.getElementsByClassName('tt2');
    var tt2Zero = tt2Collection[0];
    var tt2ZeroParent = tt2Zero.parentElement;
    var tt2ZrParChildren = tt2ZeroParent.children;
    var tt2ZrParChLength = tt2ZrParChildren.length;

    for(var i=0;i<tt2ZrParChLength;i++){
      var currEl = tt2ZrParChildren[i];
      if(currEl.tagName == 'DIV' && currEl.className == 'sp'){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt2ZeroElChildren = function(){
    var tt2Collection = document.getElementsByClassName('tt2');
    var tt2ZeroEl = tt2Collection[0];
    var tt2ZeroElChildren = tt2ZeroEl.children;
    var tt2ZElChLen = tt2ZeroElChildren.length;

    for(var i=0;i<tt2ZElChLen;i++){
      var currEl = tt2ZeroElChildren[i];

      if(currEl.className == 'socialb1'){
        currEl.style.display = 'none';
      }

      if(currEl.className == 'text'){
        var br = currEl.children[0];
        if(br.tagName == 'BR'){
          br.style.display = 'none';
        }
      }

      if(currEl.className == 'socialb2'){
        currEl.style.display = 'none';
      }

      if(currEl.className == 'space12'){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'A' && currEl.name == 'comments'){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'DIV' && currEl.className.indexOf('fb-comments') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'DIV' && currEl.id.indexOf('ScriptRoot') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'DIV' && currEl.id.indexOf('riainfo') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'DIV' && currEl.id.indexOf('holder') != -1){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt3ZeroElChildren = function(){
    var tt3Collection = document.getElementsByClassName('tt3');
    var tt3ZeroEl = tt3Collection[0];
    var tt3ZrElChildren = tt3ZeroEl.children;
    var tt3ZrElChLen = tt3ZrElChildren.length;

    for(var i=0;i<tt3ZrElChLen;i++){
      var currEl = tt3ZrElChildren[i];

      if(currEl.tagName == 'DIV' && currEl.id == 'link11'){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'DIV' && currEl.getAttribute("style") == 'padding-bottom:2px'){
        var ceNxtElSib = currEl.nextElementSibling;
        if(ceNxtElSib.tagName == 'DIV' && ceNxtElSib.className == 'p1' && ceNxtElSib.innerHTML == 'Новини'){
          currEl.style.display = 'none';
        }
      }

      if(currEl.tagName == 'DIV' && currEl.id.indexOf('admixer') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'DIV' && currEl.id.indexOf('phoenix') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'DIV' && currEl.className == 'space12'){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'BR'){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt2FirstElChildren = function(){
    var tt2Collection = document.getElementsByClassName('tt2');
    var tt2FirstEl = tt2Collection[1];
    tt2FirstEl.style.marginTop = '12px';
    var tt2FirstElChildren = tt2FirstEl.children;
    var tt2FElChLength = tt2FirstElChildren.length;
    for(var i=0; i<tt2FElChLength; i++){
      var currEl = tt2FirstElChildren[i];

      if(currEl.className == 'space12'){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt3FirstElChildren = function(){
    var tt3Collection = document.getElementsByClassName('tt3');
    var tt3FirstEl = tt3Collection[1];
    tt3FirstEl.style.marginTop = '12px';
    var tt3FirstElChildren = tt3FirstEl.children;
    var tt3FElChLength = tt3FirstElChildren.length;
    for(var i=0; i<tt3FElChLength; i++){
      var currEl = tt3FirstElChildren[i];

      if(currEl.className == 'space12'){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt4ZeroEl = function(){
    var tt4Collection = document.getElementsByClassName('tt4');
    var tt4ZeroEl = tt4Collection[0];
    tt4ZeroEl.style.display = 'none';
  }
}

TabloIDPerson.bodyBackgroundStyle();
TabloIDPerson.main2Form();
TabloIDPerson.ttZeroElChildren();
TabloIDPerson.tt2ZeroElParentChildren();
TabloIDPerson.tt2ZeroElChildren();
TabloIDPerson.tt3ZeroElChildren();
TabloIDPerson.tt2FirstElChildren();
TabloIDPerson.tt3FirstElChildren();
TabloIDPerson.tt4ZeroEl();
