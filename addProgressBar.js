function addProgressBar() {
    const progressBar = document.createElement('progress');
    progressBar.max = 100;
    progressBar.value = 0;
    progressBar.style.position = 'fixed';
    progressBar.style.top = '1rem';
    progressBar.style.left = '1rem';
    progressBar.style.transition = 'height 0.2s';
    progressBar.addEventListener('mouseenter', () => {
        setTimeout(()=>progressBar.style.height=0,1000);
    });
    progressBar.addEventListener('mouseleave', () => {
        setTimeout(()=>progressBar.style.height='',1000);
    });
    document.body.append(progressBar);

    return progressBar;
}
