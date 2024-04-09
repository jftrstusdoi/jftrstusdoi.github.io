function disabled_msg(item, reason, to_href=null) {
    alert(`This ${item} is currently disabled. Reason:\n${reason}`);
    if (to_href === null) {
        // Do nothing
    } else {
        window.location.href = to_href;
    }
}