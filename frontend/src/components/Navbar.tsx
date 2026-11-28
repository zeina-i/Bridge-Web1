function Navbar() {
  return (
    <header dir="rtl" className="w-full bg-[#1a1a2a]">
      <div className="grid h-24 grid-cols-3 items-center px-10">
        <div className="flex items-center gap-4 justify-self-start">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border  bg-[#292839]">
            <img src="/images/bridge-mark.svg" alt="" className="h-8 w-8"/>
          </div>
          <div>
            <p className="font-bold text-[#e3e0f7]">BRIDGE OS | جسر</p>
          </div>
        
        </div>

        <div className="col-start-3 flex items-center gap-4 justify-self-end">
          <button type="button" aria-label="الملف الشخصي" className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d7baff]">
            <img src="/images/profile-icon.svg" alt="" className="h-6 w-6" />
          </button>

          <button type="button" aria-label="الإشعارات" className="flex h-10 w-10 items-center justify-center rounded-xl border">
            <img src="/images/notification-icon.svg" alt="" className="h-6 w-6"/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar