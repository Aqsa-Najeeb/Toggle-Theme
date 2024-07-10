 //const storedTheme = localStorage.getItem('theme') || 'Light';
    
    /*above statement checks if there is a stored theme in the users data 
    or else it just sets it to Light*/

    document.documentElement.setAttribute('class','Light');       //sets <body class="Light">

        
    document.querySelector('.change-theme').addEventListener('click',newTheme);
    function newTheme()
    {
        const root = document.documentElement;
        let changeTheme;

        if(root.className === 'Dark')
        {
            changeTheme = 'Light';
        }
        else
        {
            changeTheme = 'Dark';
        }

        root.className = changeTheme;
        document.querySelector('.theme-name').textContent = changeTheme;
    }
    