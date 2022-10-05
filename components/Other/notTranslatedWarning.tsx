import { SiGoogletranslate } from "react-icons/si";

const NotTranslatedWarning = () => {
  return (
    <div className="mb-8 flex gap-4 rounded-md bg-[#2c2c2b] p-4">
      <SiGoogletranslate className="text-lg" />
      <div>
        <span className="text-orange-300">Content not translated yet</span>
        <br />
        <div className="text-sm">
          <span>
            You can use
            <a target="_blank" rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=id">
              {" "}
              Google Translate Extension{" "}
            </a>
            to translate this page.
          </span>
          <br />
          <span>
            Or you can
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/dhafitf/dhafit/blob/master/CONTRIBUTING.md">
              {" "}
              contribute{" "}
            </a>
            to translate this page.
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotTranslatedWarning;
