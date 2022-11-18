
/* vsdoc for module */

(function (window) {
    

    window.module = {
        /// <summary>The module object.</summary>
        /// <returns type="module"/>
                
        exports: function(source, target, callback) {
            /// <summary>Verbatim file copying using node streams. Like copy /b on windows</summary>
            /// <param name="source" type="String">The name and location of the file to copy.</param>
            /// <param name="target" type="String">Name and location of the copy.</param>
            /// <param name="callback" type="Function">The callback is passed an error object if reading
            ///  or writing failed.</param>
        }
        
    };

    var $x = window.module;
    $x.__namespace = "true";
    $x.__typeName = "module";
})(this);
