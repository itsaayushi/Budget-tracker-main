import React from "react";
import Icon from "components/core/Icon";

export default function Card({
  total,
  header,
  isIcon = false,
  iscurrency = false,
  icon,
  iconClasses,
  iconColor = "#232323",
  headerTextClass,
  className,
}) {
  return (
    <div className="cardelementclass">
      <div>
        <h3 className={`${headerTextClass} ${className}`}>{header}</h3>
        <h2>{iscurrency ? `₹ ${total}` : total}</h2>
      </div>

      <div>
        {" "}
        {isIcon ? (
          <span
            className={`w-5 h-5 iconStyle ${iconClasses}`}
            style={{ backgroundColor: `${iconColor}1A`, color: iconColor }}
          >
            <Icon name={icon} />
          </span>
        ) : null}
      </div>
    </div>
  );
}
