function Footer() {
  return (
    <footer dir="rtl" className="border-t border-[#4a4451] bg-[#121221] text-[#ccc3d3]">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        <div>
          <h2 className="font-bold text-[#e3e0f7]">جسر | Bridge</h2>
          <p className="mt-3 text-sm leading-6">
            منصة تربط الباحثين عن عمل بأصحاب الفرص المهنية.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-[#e3e0f7]">روابط سريعة</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#home" className="hover:text-[#d7baff]">الرئيسية</a></li>
            <li><a href="#jobs" className="hover:text-[#d7baff]">الوظائف</a></li>
            <li><a href="#categories" className="hover:text-[#d7baff]">التصنيفات</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-[#e3e0f7]">تواصل معنا</h2>
          <p className="mt-3 text-sm leading-6">
            هل تحتاج إلى مساعدة؟ تواصل مع فريق جسر.
          </p>
        </div>
      </div>

      <div className="border-t border-[#4a4451] p-4 text-center text-sm">
        &copy; 2026 جسر. جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}


export default Footer