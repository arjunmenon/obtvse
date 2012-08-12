var opts = {
    container: 'content_editor',
    basePath: '../../assets/admin/epiceditor',
}
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

var editor = new EpicEditor(opts);
textarea = $('#post_content');

// When it loads put the exiting content in there
editor.on('load', function (file) {
//  textarea.val(file.content);
  editor.importFile('file', textarea.val());
});

//Everytime it's updated, update the textarea
editor.on('update', function (file) {
  textarea.val(file.content);
});
editor.load();
