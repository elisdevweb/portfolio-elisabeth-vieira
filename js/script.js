

    // Inicializa o objeto de colapso do Bootstrap (requer que o Bootstrap esteja carregado)
    let bsCollapse;
    if (navbarCollapseElement) {
        // 'bootstrap' deve estar disponível globalmente
        bsCollapse = new bootstrap.Collapse(navbarCollapseElement, { toggle: false });
    }
