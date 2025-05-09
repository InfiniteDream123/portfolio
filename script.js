// Configure marked options
marked.setOptions({
    highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    },
    breaks: true
});

// Get DOM elements
const markdownInput = document.getElementById('markdown-input');
const preview = document.getElementById('preview');
const copyBtn = document.getElementById('copy-btn');
const exportBtn = document.getElementById('export-btn');

// Update preview in real-time
function updatePreview() {
    const markdown = markdownInput.value;
    preview.innerHTML = marked.parse(markdown);
    
    // Apply syntax highlighting to code blocks
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

// Copy preview content to clipboard
async function copyToClipboard() {
    try {
        const content = preview.innerText;
        await navigator.clipboard.writeText(content);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        copyBtn.textContent = 'Failed to copy';
        setTimeout(() => {
            copyBtn.textContent = 'Copy';
        }, 2000);
    }
}

// Export preview as PDF
function exportToPDF() {
    const element = preview;
    const opt = {
        margin: 1,
        filename: 'markdown-export.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

// Add event listeners
markdownInput.addEventListener('input', updatePreview);
copyBtn.addEventListener('click', copyToClipboard);
exportBtn.addEventListener('click', exportToPDF);

// Initialize preview
updatePreview(); 