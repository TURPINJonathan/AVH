function dropdown(listening, setListening, menuRef, setAvhIsOpen) {
    return () => {
        if (listening) return;
        if (!menuRef.current) return;
        setListening(true);
        [`click`, `touchstart`].forEach((type) => {
            document.addEventListener(`click`, (evt) => {
                if (menuRef.current.contains(evt.target)) return;
                setAvhIsOpen(false);
            });
        });
    }
}

export default dropdown;