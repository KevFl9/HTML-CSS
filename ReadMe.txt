Hey, this project was created when I was looking for a way to change the
Theme of a website dynamically
I am using bootstrap 4 only for alignment and a little styling.

Scss is being used for the dynamic styling.
1) In the sass folder all the classes are being imported to the _BaseStrcture.scss file and then this file is being imported into the different theme files. In this case Blue_theme.scss and Orange_theme.scss.
2) Then the href (link to the css file) in the main index.html is being changed using radio buttons and a little JavaScript.
3) This way any changes made to the _BaseStructure  will be reflected across themes and in the Theme file only the elements that need to be changed need to be overwritten.

