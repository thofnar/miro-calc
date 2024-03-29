miro.onReady(() => {
    const icon24 =
    '<g id="Layer_1"><path d="M2.796,2.468 L2.749,22.468" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M3.5,21.5 L23.564,21.5" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M2.796,14.783 C3.209,13.972 3.594,13.171 4.059,12.371 C4.623,11.401 5.385,10.556 5.953,9.606 C6.402,8.857 7.01,8.19 7.426,7.395 C7.433,7.382 7.577,7.143 7.584,7.143 C7.752,7.143 8.14,9.507 8.163,9.606 C8.417,10.699 9.623,17.334 10.268,17.95 C10.54,18.21 10.69,17.331 10.846,16.995 C11.092,16.467 11.363,15.957 11.636,15.437 C12.745,13.317 13.466,11.153 14.687,9.053 C15.97,6.848 15.997,5.125 18.107,8.148 C18.173,8.244 19.421,9.809 19.475,9.757 C20.284,8.984 20.992,7.211 21.527,6.188" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>'
    
    miro.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'Label Calculator',
                svgIcon: '<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">\n'
                + '    <g id="icon-24" stroke="currentColor" stroke-width="3" fill="none">\n'
                + '        <rect cx="8" cy="4" rx="4" ry="4" width="24" height="24"/>\n'
                + '        <rect cx="14" cy="6" width="24" height="5" stroke-width="1"/>\n'
                + '        <circle cx="6" cy="12" r="1.5" stroke-width="1" />\n'
                + '        <circle cx="6" cy="18" r="1.5" stroke-width="1" />\n'
                + '        <circle cx="12" cy="12" r="1.5" stroke-width="1" />\n'
                + '        <circle cx="12" cy="12" r="1.5" stroke-width="1" />\n'
                + '        <circle cx="12" cy="18" r="1.5" stroke-width="1" />\n'
                + '        <circle cx="18" cy="12" r="0.5" fill="black" />\n'
                + '        <circle cx="18" cy="18" r="0.5" fill="black" />\n'
                + '    </g>\n'
                + '</svg>', //icon24,
                onClick: () => {
                    // alert('Hi!123')
                    miro.board.ui.openLeftSidebar('sidebar.html')
                }
            }
        }
    });
});