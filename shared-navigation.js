// 共用導覽列管理
function loadSharedNavigation() {
    const navItems = [
        { href: "index.html", icon: "🏠", text: "首頁" },
        { href: "putSpecSql.html", icon: "🔧", text: "參數替換" },
        { href: "changeQuestionMark.html", icon: "❓", text: "問號轉換" },
        { href: "addSbAppend.html", icon: "☕", text: "Java 轉換" },
        { href: "jsParamConvert.html", icon: "🔄", text: "串轉物件" }
    ];

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navHTML = navItems.map(item => {
        const activeClass = item.href === currentPage ? ' class="active"' : '';
        return `<a href="${item.href}"${activeClass}>${item.icon} ${item.text}</a>`;
    }).join('\n');

    // 插入到所有有 .nav 類別的元素中
    const navElements = document.querySelectorAll('.nav');
    navElements.forEach(nav => {
        nav.innerHTML = navHTML;
    });
}

// 頁面載入完成後自動執行
document.addEventListener('DOMContentLoaded', loadSharedNavigation);