const NotificationItem = ({ icon, text, time }) => (
  <li className="flex items-start gap-3">
    <img src={icon} alt="" className="mt-0.5 w-6 h-6 rounded-full" />
    <div>
      <p className="text-sm text-black dark:text-white font-medium">{text}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
    </div>
  </li>
);

const ContactItem = ({ name, img }) => (
  <li className="flex items-center gap-3">
    <img src={img} alt={name} className="rounded-full w-6 h-6" />
    <span className="text-sm text-black dark:text-white font-medium">{name}</span>
  </li>
);

export default function Notification() {
  const activities = [
    {
      user: 'Natali Craig',
      avatar: '/Abstract.svg',
      text: 'Changed the style.',
      time: 'Just now',
    },
    {
      user: 'Drew Cano',
      avatar: '/Female1.svg',
      text: 'Released a new version.',
      time: '59 minutes ago',
    },
    {
      user: 'Andi Lane',
      avatar: '/person4.svg',
      text: 'Submitted a bug.',
      time: '12 hours ago',
    },
    {
      user: 'Andi Lane',
      avatar: '/Female2.svg',
      text: 'Modified A data in Page X.',
      time: 'Today, 11:59 AM',
    },
    {
      user: 'Andi Lane',
      avatar: '/Abstract1.svg',
      text: 'Deleted a page in Project X.',
      time: 'Feb 2, 2025',
    },
  ];

  return (
    <aside className="w-full md:w-80 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 h-auto md:h-screen p-4 md:p-6 overflow-y-auto">
      <div className="space-y-10 text-black dark:text-white w-full">

        {/* Notifications */}
        <section>
          <h2 className="text-sm font-medium text-black dark:text-gray-400 tracking-wide mb-4">
            Notifications
          </h2>
          <ul className="space-y-6">
            <NotificationItem icon="/bug.svg" text="You fixed a bug." time="Just now" />
            <NotificationItem icon="/person1.svg" text="New user registered." time="59 minutes ago" />
            <NotificationItem icon="/bug.svg" text="You fixed a bug." time="12 hours ago" />
            <NotificationItem icon="/Lane.svg" text="Andi Lane subscribed to you." time="Today, 11:59 AM" />
          </ul>
        </section>

        {/* Activities */}
        <section>
          <h2 className="text-sm font-medium text-black dark:text-gray-400 tracking-wide mb-4">
            Activities
          </h2>
          <ul className="space-y-6 relative">
            {activities.map((item, i) => (
              <li key={i} className="relative flex items-start gap-3 pl-2">
                <div className="relative flex flex-col items-center">
                  <div className="z-10 w-6 h-6 rounded-full overflow-hidden bg-white dark:bg-gray-800">
                    <img
                      src={item.avatar}
                      alt={item.user}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {i !== activities.length - 1 && (
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-[18px] bg-gray-300 dark:bg-gray-600 z-0" />
                  )}
                </div>
                <div>
                  <p className="text-sm text-black dark:text-white font-medium">{item.text}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Contacts */}
        <section>
          <h2 className="text-sm font-medium text-black dark:text-gray-400 tracking-wide mb-4">
            Contacts
          </h2>
          <ul className="space-y-5">
            {[
              { name: 'Natali Craig', img: '/Natali.svg' },
              { name: 'Drew Cano', img: '/Drew.svg' },
              { name: 'Andi Lane', img: '/Andi.svg' },
              { name: 'Koray Okumus', img: '/Koray.svg' },
              { name: 'Kate Morrison', img: '/Kate.svg' },
              { name: 'Melody Macy', img: '/Melody.svg' },
            ].map((person, idx) => (
              <ContactItem key={idx} name={person.name} img={person.img} />
            ))}
          </ul>
        </section>

      </div>
    </aside>
  );
}
