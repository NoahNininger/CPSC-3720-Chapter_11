/* 2. Select the main container element and add event listeners to it.
		  Listen for mouseover, mouseout, and mousemove. */
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('active');
    const output = document.getElementById('output');

 /* 3. On mouseover, add the active class, and on mouseout,
       remove the active class */
    container.addEventListener('mouseover',
      () => { container.classList.add('active'); });
    container.addEventListener('mouseout', () => {
        container.classList.remove('active');
        output.textContent = '';
    });

 /* 4. On mousemove, call a function that tracks the event element clientX
		   and clientY positions, embeds them in a human-readable sentence,
		   and outputs it into the output element. */
    container.addEventListener('mousemove', (event) => {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        output.textContent = `Mouse X: ${x}px\n Mouse Y: ${y}px`;
    });
});
