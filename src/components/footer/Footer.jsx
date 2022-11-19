import styles from "./Footer.module.css";
import FooterItem from "./FooterItem";
//==============DATA OF FOOTER=================
const footerArray = [
  {
    title: "CUSTOMER SERVICES",
    links: [
      "Help & Contact Us",
      "Returns & Refunds",
      "Online Stores",
      "Terms & Conditions",
    ],
  },
  {
    title: "COMPANY",
    links: ["What We Do", "Available Services", "Latest Posts", "FAQs"],
  },
  {
    title: "SOCIAL MEDIA",
    links: ["Twitter", "Instagram", "Facebook", "Pinterest"],
  },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["footer-center"]}>
        {footerArray.map((x) => {
          return <FooterItem key={x.title} item={x} />;
        })}
      </div>
    </div>
  );
}
