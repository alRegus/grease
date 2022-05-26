import React from "react";

import classes from "./DepartmentsAndServices.module.scss";

export default function DepartmentsAndServices() {
  return (
    <section className={classes["departments"]}>
      <h1 id="header-dep">Departments & Services</h1>
      <div className={classes["departments-links"]}>
        <ul>
          <li>
            <a href="#sales-department">Sales Department</a>
          </li>
          <li>
            <a href="#rental-department">Rental Department</a>
          </li>
          <li>
            <a href="#customer-department">Customer Service</a>
          </li>
          <li>
            <a href="#photo-department">Photo Printing / Printique</a>
          </li>
          <li>
            <a href="#federal-department">
              Federal Government/GSA Sales (Purchase orders)
            </a>
          </li>
          <li>
            <a href="#government-department">
              Government/Education Sales (Purchase orders)
            </a>
          </li>
          <li>
            <a href="#state-department">State and Local Government</a>
          </li>
          <li>
            <a href="#law-department">Law Enforcement</a>
          </li>
          <li>
            <a href="#pro-department">
              Pro Services(Professional and Corp Accounts)
            </a>
          </li>
          <li>
            <a href="#used-department">Used Department</a>
          </li>
          <li>
            <a href="#verification-department">Verification Department</a>
          </li>
          <li>
            <a href="#other-department">For all other inquires</a>
          </li>
        </ul>
      </div>
      <div className={classes["departments-department"]} id="sales-department">
        <div className={classes["departments-department-header"]}>
          <h2>Sales Department</h2>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>NYC Retail Store:</span>
            </p>
            <p>
              <span>Address:</span>42 West 18th Street (Between 5th & 6th
              Ave.'s), New York, NY 10011
            </p>
            <p>
              <span>Phone:</span>212-741-0063
            </p>
            <p>
              <span>Store Hours:</span>
            </p>
          </div>
          <div>
            <p>
              <span>The NYC Store Hours for Upcoming Holidays:</span>
            </p>
          </div>
          <div>
            <p>
              <span>Holiday Hours</span>
            </p>
            <p>Shavuos Holiday Closure</p>
            <p>Sunday June 5th: CLOSED</p>
            <p>Monday June 6th: CLOSED</p>
            <p>Regular hours resume on Tuesday June 7th.</p>
          </div>
          <div>
            <p>
              <span>Mail Order:</span>
            </p>
            <p>
              <span>Toll Free:</span> 800-223-2500
            </p>
            <p>
              <span>Local:</span>212-741-0052
            </p>
            <p>
              <span>Fax:</span>212-463-7223
            </p>
            <p>
              <span>Mail Order Hours:</span>
            </p>
            <p>Sun: 9:30-5:00, Mon-Thur: 9:00-7:30, Fri: 9:00-4:00</p>
            <p>
              <span>E-mail:</span>
              <a href="mailto:webmaster@example.com">sales@grease.com</a>
            </p>
          </div>
          <div>
            <p>
              <span>Purchase Orders</span>
            </p>
            <p>
              <span>Fax:</span>212-741-9087
            </p>
            <p>
              <span>E-mail:</span>
              <a href="mailto:webmaster@example.com">edu@grease.com </a> -{" "}
              <a href="mailto:webmaster@example.com">govsales@grease.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["departments-department"]} id="rental-department">
        <div className={classes["departments-department-header"]}>
          <h2>Rental Department</h2>
          <a href="#header-dep">Return to Top</a>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>Local:</span>212-627-8487
            </p>
            <p>
              <span>Fax:</span>212-929-9013
            </p>
            <p>
              <span>E-mail:</span>
              <a href="mailto:webmaster@example.com">rental@grease.com</a>
            </p>
          </div>
          <div>
            <p>
              <span>Hours:</span>
            </p>
            <p>Sun: 10:00-4:45, Mon-Thur: 8:00-7:15, Friday: 8:00-6:00</p>
          </div>
        </div>
      </div>
      <div
        className={classes["departments-department"]}
        id="customer-department"
      >
        <div className={classes["departments-department-header"]}>
          <h2>Customer Service</h2>
          <a href="#header-dep">Return to Top</a>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>Toll Free:</span>800-815-0702
            </p>
            <p>
              <span>Local:</span>212-741-0466
            </p>
            <p>
              <span>Fax:</span> 212-645-4533
            </p>
            <p>
              <span>E-mail:</span>{" "}
              <a href="mailto:webmaster@example.com">Click Here</a>
            </p>
            <p>
              <span>Hours:</span>
            </p>
            <p>Mon-Thur: 9:30am-7:00pm, Friday: 9:30am-4:00pm</p>
          </div>
        </div>
      </div>
      <div className={classes["departments-department"]} id="photo-department">
        <div className={classes["departments-department-header"]}>
          <h2>Photo Printing / Printique</h2>
          <a href="#header-dep">Return to Top</a>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>Toll Free:</span>888-216-6400
            </p>
            <p>
              <span>E-mail:</span>
              <a href="mailto:webmaster@example.com">photolab@grease.com</a>
            </p>
            <p>
              <span>Hours:</span>
            </p>
            <p>Mon-Thur: 9:00-6:00, Friday: 9:00-1:00</p>
          </div>
        </div>
      </div>
      <div
        className={classes["departments-department"]}
        id="federal-department"
      >
        <div className={classes["departments-department-header"]}>
          <h2>Federal Government/GSA Sales (Purchase orders)</h2>
          <a href="#header-dep">Return to Top</a>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>Toll Free:</span>888-209-5558
            </p>
            <p>
              <span>Fax:</span>212-741-1027
            </p>
            <p>
              <span>E-mail:</span>
              <a href="mailto:webmaster@example.com">federal@grease.com</a>
            </p>
          </div>
        </div>
      </div>
      <div
        className={classes["departments-department"]}
        id="government-department"
      >
        <div className={classes["departments-department-header"]}>
          <h2>Education (Purchase orders)</h2>
          <a href="#header-dep">Return to Top</a>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>Toll Free:</span>888-582-2500
            </p>
            <p>
              <span>Fax:</span>212-741-9087
            </p>
            <p>
              <span>E-mail:</span>
              <a href="mailto:webmaster@example.com">edu@grease.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["departments-department"]} id="state-department">
        <div className={classes["departments-department-header"]}>
          <h2>State and Local Government (Purchase orders)</h2>
          <a href="#header-dep">Return to Top</a>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>Toll Free:</span>888-582-2500
            </p>
            <p>
              <span>Fax:</span>212-741-9087
            </p>
            <p>
              <span>E-mail:</span>
              <a href="mailto:webmaster@example.com"> govsales@grease.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["departments-department"]} id="law-department">
        <div className={classes["departments-department-header"]}>
          <h2>Law Enforcement</h2>
          <a href="#header-dep">Return to Top</a>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>Toll Free:</span>888-874-1586
            </p>
            <p>
              <span>Fax:</span>646-758-8568
            </p>
            <p>
              <span>E-mail:</span>
              <a href="mailto:webmaster@example.com"> le@grease.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["departments-department"]} id="pro-department">
        <div className={classes["departments-department-header"]}>
          <h2>Pro Services (Professional and Corp Accounts)</h2>
          <a href="#header-dep">Return to Top</a>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>Toll Free:</span>888-582-3900
            </p>
            <p>
              <span>Local</span>212-645-5754
            </p>
            <p>
              <span>Fax:</span>212-463-7223
            </p>
            <p>
              <span>E-mail:</span>
              <a href="mailto:webmaster@example.com"> proservice@grease.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["departments-department"]} id="used-department">
        <div className={classes["departments-department-header"]}>
          <h2>Used Department</h2>
          <a href="#header-dep">Return to Top</a>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>Toll Free:</span>800-223-2500
            </p>
            <p>
              <span>Local</span>212-741-0052
            </p>
            <p>
              <span>Trade-Ins:</span>212-741-0052
            </p>
            <p>
              <span>Cameras:</span>ext. 2107
            </p>
            <p>
              <span>Video:</span>ext. 2043, or ext. 2168
            </p>
            <p>
              <span>Fax:</span>212-675-8715
            </p>
            <p>
              <span>Customer Services E-mail</span>
              <a href="mailto:webmaster@example.com"> usedservice@grease.com</a>
            </p>
            <p>
              <span>Trade-Ins E-mail:</span>
              <a href="mailto:webmaster@example.com"> used@grease.com</a>
            </p>
          </div>
        </div>
      </div>
      <div
        className={classes["departments-department"]}
        id="verification-department"
      >
        <div className={classes["departments-department-header"]}>
          <h2>Verification Department</h2>
          <a href="#header-dep">Return to Top</a>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>Toll Free:</span> 800-223-2500
            </p>
            <p>
              <span>Local</span>212-741-0052
            </p>
            <p>
              <span>Fax:</span>212-741-0467
            </p>
            <p>
              <span>E-mail:</span>
              <a href="mailto:webmaster@example.com"> verify@grease.com</a>
            </p>
            <p>
              <span>Hours:</span>Mon-Thur: 9:30-4:30, Fri: 9:30-12:30
            </p>
          </div>
        </div>
      </div>
      <div className={classes["departments-department"]} id="other-department">
        <div className={classes["departments-department-header"]}>
          <h2>For all other inquires</h2>
          <a href="#header-dep">Return to Top</a>
        </div>
        <div className={classes["departments-department-body"]}>
          <div>
            <p>
              <span>Toll Free:</span>800-223-2500
            </p>
            <p>
              <span>Fax:</span>212-741-0052
            </p>
            <p>
              <span>E-mail:</span>
              <a href="mailto:webmaster@example.com"> info@grease.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
