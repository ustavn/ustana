export type Locale = "en" | "vi";

export const translations = {
  en: {
    nav: {
      platform: "Platform Architecture",
      dispatch: "Features",
      pricing: "Team",
      customers: "Team",
      signIn: "Sign in",
      getStarted: "Request Demo",
    },
    hero: {
      badge: "Now in beta",
      title: "The operating system for home service businesses",
      subtitle:
        "A unified platform that helps you manage bookings, dispatch technicians, process payments, and scale your operations—all in one place.",
      ctaPrimary: "Request Demo",
      ctaSecondary: "Partner With Us",
      flow: [
        { label: "Customer", desc: "Request service" },
        { label: "Platform", desc: "Process and route" },
        { label: "Technician", desc: "Complete job" },
        { label: "Payment", desc: "Settle and report" },
      ],
    },
    workflow: {
      title: "A unified infrastructure for service operations",
      titleAccent: "service operations",
      subtitle: "Build, scale, and manage your entire service business on a single platform",
      coreTitle: "Platform Core",
      coreSubtitle: "Intelligent routing and orchestration",
      coreModules: ["Booking Engine", "Dispatch", "Payments", "Analytics"],
      input: { label: "Customer Request", desc: "Web, Mobile, Call" },
      output: { label: "Technician", desc: "Mobile App" },
      outcomes: ["Payment Settlement", "Customer Data", "Analytics", "Operations"],
    },
    features: {
      title: "Everything you need to run a modern service business",
      titleAccent: "modern service business",
      subtitle: "Six powerful modules working together as one platform.",
      items: [
        { title: "Booking Engine", desc: "Smart scheduling with real-time availability." },
        { title: "Dispatch System", desc: "Intelligent routing for technician assignments." },
        { title: "Technician Management", desc: "Track performance and manage schedules." },
        { title: "Payments and Wallet", desc: "Automated invoicing and instant payouts." },
        { title: "Customer CRM", desc: "Complete profiles with service history." },
        { title: "Service Analytics", desc: "Dashboards and insights to grow faster." },
      ],
    },
    metrics: {
      title: "Trusted by service operators",
      subtitle: "From single-location shops to multi-city operations.",
      items: [
        { v: "120K+", l: "Jobs dispatched" },
        { v: "98%", l: "Jobs assigned within SLA" },
        { v: "340+", l: "Service teams" },
        { v: "60%", l: "Fewer missed appointments" },
      ],
    },
    outcomes: {
      title: "Built for real field operations",
      subtitle: "Operational outcomes measured across service teams running on Usta.",
      items: [
        { label: "Reduce dispatch time", value: "−35%", desc: "From minutes-on-the-phone to one-tap assignment." },
        { label: "Increase technician utilization", value: "+28%", desc: "Fewer idle hours, smarter routing between jobs." },
        { label: "Fewer missed appointments", value: "−60%", desc: "Automated reminders and live ETA updates." },
        { label: "Faster payment reconciliation", value: "−4 days", desc: "Cash, transfers, and invoices in one ledger." },
        { label: "Real-time operational visibility", value: "24/7", desc: "Every job, technician, and payment in one view." },
      ],
    },
    team: {
      title: "Built by operators",
      subtitle: "Founded by product leaders and operators with deep experience in hospitality, field operations, and large-scale service systems.",
      members: [
        { name: "Linh Pham", role: "Co-founder, CEO", bio: "10+ years managing operations in services, hospitality, and real estate." },
        { name: "KC", role: "Co-founder, Product", bio: "Building and developing SaaS platforms for businesses." },
        { name: "Hien NT", role: "Co-founder, Operations", bio: "Operations and logistics expert with experience managing large-scale services." },
        { name: "Vu Huynh", role: "Co-founder, Engineering", bio: "Systems architect developing highly scalable technology platforms." },
      ],
    },
    finalCta: {
      title: "Run your service business on one platform",
      subtitle: "Manage bookings, technicians, payments, and customer operations from one platform.",
      primary: "Request Demo",
      secondary: "Partner With Us",
    },
    footer: {
      rights: "© 2026 Usta, Inc. All rights reserved.",
    },
  },
  vi: {
    nav: {
      platform: "Kiến trúc nền tảng",
      dispatch: "Tính năng",
      pricing: "Đội ngũ",
      customers: "Đội ngũ",
      signIn: "Đăng nhập",
      getStarted: "Đặt lịch demo",
    },
    hero: {
      badge: "Đang chạy beta",
      title: "Hệ điều hành cho doanh nghiệp dịch vụ tại nhà",
      subtitle:
        "Một nền tảng thống nhất giúp bạn quản lý booking, điều phối kỹ thuật viên, xử lý thanh toán và mở rộng vận hành — tất cả trong một nơi.",
      ctaPrimary: "Đặt lịch demo",
      ctaSecondary: "Hợp tác với chúng tôi",
      flow: [
        { label: "Khách hàng", desc: "Yêu cầu dịch vụ" },
        { label: "Nền tảng", desc: "Xử lý và định tuyến" },
        { label: "Kỹ thuật viên", desc: "Hoàn thành công việc" },
        { label: "Thanh toán", desc: "Đối soát và báo cáo" },
      ],
    },
    workflow: {
      title: "Hạ tầng thống nhất cho vận hành dịch vụ",
      titleAccent: "vận hành dịch vụ",
      subtitle: "Xây dựng, mở rộng và quản lý toàn bộ doanh nghiệp dịch vụ trên một nền tảng",
      coreTitle: "Platform Core",
      coreSubtitle: "Định tuyến và điều phối thông minh",
      coreModules: ["Booking Engine", "Điều phối", "Thanh toán", "Phân tích"],
      input: { label: "Yêu cầu khách hàng", desc: "Web, Mobile, Hotline" },
      output: { label: "Kỹ thuật viên", desc: "Ứng dụng di động" },
      outcomes: ["Đối soát thanh toán", "Dữ liệu khách hàng", "Phân tích", "Vận hành"],
    },
    features: {
      title: "Tất cả những gì bạn cần cho doanh nghiệp dịch vụ hiện đại",
      titleAccent: "doanh nghiệp dịch vụ hiện đại",
      subtitle: "Sáu module mạnh mẽ phối hợp như một nền tảng duy nhất.",
      items: [
        { title: "Booking Engine", desc: "Lập lịch thông minh với tình trạng thời gian thực." },
        { title: "Hệ thống điều phối", desc: "Định tuyến thông minh cho phân công kỹ thuật viên." },
        { title: "Quản lý kỹ thuật viên", desc: "Theo dõi hiệu suất và quản lý lịch trình." },
        { title: "Thanh toán & ví", desc: "Xuất hóa đơn tự động và thanh toán tức thì." },
        { title: "CRM khách hàng", desc: "Hồ sơ đầy đủ kèm lịch sử dịch vụ." },
        { title: "Phân tích dịch vụ", desc: "Bảng điều khiển và báo cáo để tăng trưởng nhanh hơn." },
      ],
    },
    metrics: {
      title: "Được tin dùng bởi các đơn vị dịch vụ",
      subtitle: "Từ tiệm đơn lẻ đến đội vận hành đa thành phố.",
      items: [
        { v: "120K+", l: "Đơn đã điều phối" },
        { v: "98%", l: "Đơn đúng SLA" },
        { v: "340+", l: "Đội dịch vụ" },
        { v: "60%", l: "Giảm lỡ lịch hẹn" },
      ],
    },
    outcomes: {
      title: "Xây cho vận hành hiện trường thật sự",
      subtitle: "Các chỉ số vận hành thực tế đo được từ các đội dịch vụ đang dùng Usta.",
      items: [
        { label: "Giảm thời gian điều phối", value: "−35%", desc: "Từ gọi điện vài phút xuống còn một chạm phân công." },
        { label: "Tăng hiệu suất kỹ thuật viên", value: "+28%", desc: "Ít giờ chết hơn, lộ trình giữa các đơn thông minh hơn." },
        { label: "Giảm lỡ lịch hẹn", value: "−60%", desc: "Nhắc lịch tự động và cập nhật ETA theo thời gian thực." },
        { label: "Đối soát thanh toán nhanh hơn", value: "−4 ngày", desc: "Tiền mặt, chuyển khoản và hóa đơn về cùng một sổ." },
        { label: "Hiển thị vận hành thời gian thực", value: "24/7", desc: "Mọi đơn, kỹ thuật viên và thanh toán trong một màn hình." },
      ],
    },
    team: {
      title: "Xây bởi người làm vận hành",
      subtitle: "Được sáng lập bởi đội ngũ sản phẩm và vận hành có kinh nghiệm sâu trong ngành dịch vụ, hospitality và hệ thống vận hành quy mô lớn.",
      members: [
        { name: "Linh Pham", role: "Đồng sáng lập, CEO", bio: "Hơn 10 năm quản lý vận hành trong lĩnh vực dịch vụ, khách sạn và bất động sản." },
        { name: "KC", role: "Đồng sáng lập, Sản phẩm", bio: "Xây dựng và phát triển các nền tảng SaaS cho doanh nghiệp." },
        { name: "Hien NT", role: "Đồng sáng lập, Vận hành", bio: "Chuyên gia vận hành và logistics với kinh nghiệm quản lý dịch vụ quy mô lớn." },
        { name: "Vu Huynh", role: "Đồng sáng lập, Kỹ thuật", bio: "Kiến trúc sư hệ thống, phát triển các nền tảng công nghệ có khả năng mở rộng cao." },
      ],
    },
    finalCta: {
      title: "Vận hành doanh nghiệp dịch vụ trên một nền tảng",
      subtitle: "Quản lý booking, kỹ thuật viên, thanh toán và khách hàng trên cùng một nền tảng.",
      primary: "Đặt lịch demo",
      secondary: "Hợp tác với chúng tôi",
    },
    footer: {
      rights: "© 2026 Usta, Inc. Bảo lưu mọi quyền.",
    },
  },
};

export type Translation = typeof translations.en;
