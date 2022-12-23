addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        
        $('.navbar').css({
            'height': ' 12vh'
        });
    } else {
        
        $('.navbar').css({
            'height': ' 15vh'
        });
    }
});