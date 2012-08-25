// Save button validates
$('#save-button').click(function(e) {
    if (validateTitle()) {
        $form.attr('target', '_self');
        $form.attr('action', original_action);
        $form.submit();
    } else {
        e.preventDefault();
    }
});

// Options menu
$('.menu').toggle(function(){
    $(this).addClass('active');
    $($(this).attr('href')).addClass('visible');
}, function() {
    $(this).removeClass('active');
    $($(this).attr('href')).removeClass('visible');
});

// Preview pops open new window
var $form = $('form:first'),
    original_action = $form.attr('action');
$('#preview-button').click(function(e) {
    if (validateTitle()) {
        $form.attr('action', '/preview');
        $form.attr('target', '_blank');
        $form.submit();
    } else {
        e.preventDefault();
    }
});

var opts = {
    container: 'content_editor',
    basePath: '../../assets/admin/epiceditor',
}
var editor = new EpicEditor(opts);
textarea = $('#post_content');

// When it loads put the exiting content in there
editor.on('load', function (file) {
  editor.importFile('file', textarea.val());
});

//Everytime it's updated, update the textarea
editor.on('update', function (file) {
  textarea.val(file.content);
});
editor.load();


$(document).ready(function() {
    var winheight = $(window).height() - 220 + "px";
    $('#content_editor iframe').css("height",winheight);
    $('#content_editor iframe').contents().find('#epiceditor-editor-frame').css("height",winheight);
    $('#content_editor iframe').contents().find('body').css("height",winheight);
    $('#content_editor iframe').contents().find('#epiceditor-previewer-frame').css("height",winheight);
});

$(window).resize(function() {
    var winheight = $(window).height() - 220 + "px";
    $('#content_editor iframe').css("height",winheight);
    $('#content_editor iframe').contents().find('#epiceditor-editor-frame').css("height",winheight);
    $('#content_editor iframe').contents().find('body').css("height",winheight);
    $('#content_editor iframe').contents().find('#epiceditor-previewer-frame').css("height",winheight);
});
