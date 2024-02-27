import AccessIcon from "../assets/images/icon-access-anywhere.svg";
import FileIcon from "../assets/images/icon-any-file.svg";
import CollabIcon from "../assets/images/icon-collaboration.svg";
import SecurityIcon from "../assets/images/icon-security.svg";

export const Features = () => {

  return (
    <section className="bg-main py-20" id="feature">
      <div className="container-section">
        <div className="grid grid-rows-4 grid-cols-1 gap-16 font-raleway
          md:grid-rows-2 md:grid-cols-2 md:gap-y-16 md:gap-x-20 lg:px-32">
          <article className="text-primary text-center text-wrap
            flex flex-col items-center px-10">
            <img className="w-18 h-20" src={ AccessIcon } />
            <h2 className="text-xl font-semibold mt-6 mb-2">Access your files, anywhere</h2>
            <p className="text-base text-slate-300">The ability to use a smartphone, tablet, or computer to access your account means your
              files allow you everywhere.</p>
          </article>
          <article className="text-primary text-center text-wrap
            flex flex-col items-center px-10">
            <img className="w-18 h-20" src={ SecurityIcon } />
            <h2 className="text-xl font-semibold mt-6 mb-2">Security you can trust</h2>
            <p className="text-base text-slate-300">2-factor authentication and user-controlled encryption are just a couple of the security
              features we allow to help secure your files.</p>
          </article>
          <article className="text-primary text-center text-wrap
            flex flex-col items-center px-10">
            <img className="w-18 h-20" src={ CollabIcon } />
            <h2 className="text-xl font-semibold mt-6 mb-2">Real-time Collaboration</h2>
            <p className="text-base text-slate-300">Securely share files and folders with friends, family and collegues for live collaboration.
              No email attachments required.</p>
          </article>
          <article className="text-primary text-center text-wrap
            flex flex-col items-center px-10">
            <img className="w-18 h-20" src={ FileIcon } />
            <h2 className="text-xl font-semibold mt-6 mb-2">Store any type of file</h2>
            <p className="text-base text-slate-300">Wheter you&apos; re sharing holidays photos or work documents. Fylo has you covered allowing
              for all file types to be securely stored and shared</p>
          </article>
        </div>
      </div>
    </section>
  )

}
