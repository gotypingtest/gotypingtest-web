export default function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.setAttribute('data-theme',t);document.documentElement.setAttribute('data-bs-theme',t);}catch(e){}})();`;

  return (
    <script dangerouslySetInnerHTML={{ __html: script }}/>
  );
}
