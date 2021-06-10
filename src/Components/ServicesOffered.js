import React from "react";
import { ListGroup, ListGroupItem, UncontrolledCollapse } from "reactstrap";

export default function ServicesOffered() {
  return (
    <div className="container-fluid mt-5 p-5 back">
      <div className="text-center">
        <h1 className="text-success pb-3 font-weight-bold">SERVICES</h1>
        <blockquote className="text-muted" style={{ fontSize: "1.5rem" }}>
          "People say that accidents are due to human error, which is like
          saying falls are due to gravity."
        </blockquote>
        <article className="text-justify">
          <p className="lead" style={{ fontSize: "1.1rem" }}>
            An incident is just the tip of the iceberg, a sign of a much larger
            problem below the surface. Your employees learn by examples. If they
            don’t see you practising good safety habits, they won’t think safety
            is important. This is why we curate our services with examples to
            provide quality training to minimize unsafe acts and promote a safe
            workplace environment. We understand that every accident is a notice
            that something is wrong with men, method or material and that is why
            we first investigate and then act.
          </p>
        </article>
        <p className="lead text-justify" style={{ fontSize: "1.1rem" }}>
          These novel ideas are what help us provide the following quality
          services to your organization:
        </p>
      </div>
      <div className="mt-4">
        <h4 className="font-weight-bold text-dark text-center">
          <u>SAFETY TRAINING</u>
        </h4>
        <ListGroup flush>
          <ListGroupItem color="success">
            Working at height & scaffold safety.
          </ListGroupItem>
          <ListGroupItem color="dark">Safety at confined pace.</ListGroupItem>
          <ListGroupItem color="success">
            Safety in material handling.
          </ListGroupItem>
          <ListGroupItem color="dark">Work permit/LOTOTO.</ListGroupItem>
          <ListGroupItem color="success">Electrical safety.</ListGroupItem>
          <ListGroupItem color="dark">
            Workplace back injury prevention & Ergonomics.
          </ListGroupItem>
          <ListGroupItem color="success">
            Behavior based safety at workplace.
          </ListGroupItem>
          <ListGroupItem color="dark">Road safety.</ListGroupItem>
          <ListGroupItem color="success">
            Fire safety & fire prevention .
          </ListGroupItem>
          <ListGroupItem color="dark">
            Emergency Response Management & Mock drill.
          </ListGroupItem>
          <ListGroupItem color="success">
            Legal requirements in safety.
          </ListGroupItem>
          <ListGroupItem color="dark">
            Hazard identification & risk assessment .
          </ListGroupItem>
          <ListGroupItem color="success">
            Process safety management.
          </ListGroupItem>
          <ListGroupItem color="dark">
            General safety appreciation for Workers.
          </ListGroupItem>
          <ListGroupItem color="success">Motivating employees.</ListGroupItem>
          <ListGroupItem color="dark">
            General Safety appreciation for Officers.
          </ListGroupItem>
          <ListGroupItem color="success">Gas safety.</ListGroupItem>
          <ListGroupItem color="dark">
            Job Safety Analysis ,Capturing near Misses , &Tool box talk
          </ListGroupItem>
          <ListGroupItem color="success">
            Machine guarding, hand tools & portable power tools safety.
          </ListGroupItem>
          <ListGroupItem color="dark">
            Personal Protective Equipment.
          </ListGroupItem>
          <ListGroupItem color="success">
            First Aid & CPR with practical demonstration.
          </ListGroupItem>
          <ListGroupItem color="dark">
            Housekeeping , Waste Management & 5 S
          </ListGroupItem>
          <ListGroupItem color="success">
            Management of COVID-19 Safety measures & SOP at work places.
          </ListGroupItem>
          <ListGroupItem color="dark">Effective communication.</ListGroupItem>
          <ListGroupItem color="success">
            Safety Induction Training for new entrant.
          </ListGroupItem>
          <ListGroupItem color="dark">
            Safety Philosophy & Performance Measurement.
          </ListGroupItem>
          <ListGroupItem color="success">
            Accident causation Model & prevention strategy.
          </ListGroupItem>
          <ListGroupItem color="dark">
            Chemical safety including handling of hazardous chemicals which are
            stored and used in industry concerned.
          </ListGroupItem>
          <ListGroupItem color="success">
            Protecting employees from heat stress & heat acclimatization
            training.
          </ListGroupItem>
        </ListGroup>
      </div>
      <ListGroup className="mt-4">
        <ListGroupItem tag="button" action id="iso" color="success">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">SAFETY AUDIT AS PER ISO 14489</div>
          <UncontrolledCollapse toggler="#iso" className="mt-2">
            <p>We provide safety auditing as per ISO 14489 standard.</p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="lc" color="dark">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">LEGAL COMPLIANCE</div>
          <UncontrolledCollapse toggler="#lc" className="mt-2">
            <p>
              <ul>
                <li>Testing of lifting tackles & pressure vessels.</li>
                <li>NDT of all types.</li>
                <li>
                  Documentation & measures of Compliances related with Ministry
                  of Environment & Forest.
                </li>
                <li>
                  All compliances related with Petroleum & Explosive Safety
                  Organization (PESO ), SMPV Rules, Factory Act & Rules.
                </li>
                <li>BOCW Rules , Stability checking.</li>
              </ul>
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="rca" color="success">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">
            ACCIDENT INVESTIGATION, ROOT CAUSE ANALYSIS & PREVENTION STRATEGY
          </div>
          <UncontrolledCollapse toggler="#rca" className="mt-2">
            <p className="text-lowercase">
              <span className="text-uppercase">W</span>e provide ACCIDENT
              INVESTIGATION, ROOT CAUSE ANALYSIS & PREVENTION STRATEGY services.{" "}
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="bbs" color="dark">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">BEHAVIOR BASED SAFETY WORKSHOP</div>
          <UncontrolledCollapse toggler="#bbs" className="mt-2">
            <p>Training to implementation of BBS culture at work places.</p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="psm" color="success">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">PROCESS SAFETY MANAGEMENT</div>
          <UncontrolledCollapse toggler="#psm" className="mt-2">
            <p>
              <ul>
                <li>PSM workshop.</li>
                <li>Risk Assessment.</li>
                <li>QRA/FMEA/HAZOP</li>
                <li>On site emergency Planning.</li>
                <li>Management of Change.</li>
                <li>
                  Services related MSIHCR (Chapter IVA as per Factory Act)
                </li>
              </ul>
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="ms" color="dark">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">MANAGEMENT SYSTEM</div>
          <UncontrolledCollapse toggler="#ms" className="mt-2">
            <p>
              <ul>
                <li>
                  All Document preparation of ISO 45001/ISO 14001/ISO 9001.
                </li>
                <li>Conduct training & Internal Audit.</li>
              </ul>
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="pep" color="success">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">
            PREPARATION OF EHS POLICY, SAFETY MANUAL, PERMIT TO WORKS SYSTEM,
            SOPs & ITS REVIEW
          </div>
          <UncontrolledCollapse toggler="#pep" className="mt-2">
            <p>
              We help you prepare EHS policies, safety manuals, work system
              permits, SOP's & reviews.
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="ss" color="dark">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">STAFFING SERVICES</div>
          <UncontrolledCollapse toggler="#ss" className="mt-2">
            <p>
              <ul>
                <li>Qualified safety officer.</li>
                <li>Fire office , Fire man, Fire steward & Fire attendant .</li>
                <li>
                  Safety Officer , Safety crew , Safety Trained supervisor.
                </li>
              </ul>
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="ssd" color="success">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">
            SAFETY SERVICES DURING SHUT DOWN
          </div>
          <UncontrolledCollapse toggler="#ssd" className="mt-2">
            <p>
              <ul>
                <li>Round the clock safety supervision.</li>
                <li>Pre-audit & post- audit gap analysis.</li>
                <li>
                  Training of Officers,regular employees & contract worker.
                </li>
              </ul>
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="sosd" color="dark">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">
            SUPPLY OF SAFETY DEVICES/ EQUIPMENT & PPEs
          </div>
          <UncontrolledCollapse toggler="#sosd" className="mt-2">
            <p>
              <ul>
                <li>All kinds PPEs.</li>
                <li>
                  Gas detector , Rescue kit ,All height working devices ,Safety
                  Net, Breathing apparatus.
                </li>
                <li>
                  Safety signages, Safetyjacket, sticker, safety slogan, alarm
                  ,poster, reflective board, First aid box , Safety promotional
                  material as per requirements.
                </li>
              </ul>
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="csm" color="success">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">CONSTRUCTION SAFETY MANAGEMENT</div>
          <UncontrolledCollapse toggler="#csm" className="mt-2">
            <p>
              <ul>
                <li>Scaffold erection.</li>
                <li>100% safety supervision at height job.</li>
                <li>Excavation and tunneling.</li>
                <li>Confined space work.</li>
                <li>Staging load calculation.</li>
              </ul>
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="dtb" color="dark">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">
            DELIVERING TOOL BOX TALK & CAPTURING NEAR MISSES
          </div>
          <UncontrolledCollapse toggler="#dtb" className="mt-2">
            <p>
              We deliver tool box talk and how-to's of capturing near miss etc.
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="ih" color="success">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">
            INDUSTRIAL HYGIENE STUDY (NOISE . ILLUMINATION & DUST)
          </div>
          <UncontrolledCollapse toggler="#ih" className="mt-2">
            <p>
              <ul>
                <li>Fire audit & Fire risk assessment.</li>
                <li>Fire Load & Fire Index calculation.</li>
                <li>Supply of all fire fighting devices & equipment .</li>
                <li>Fire drill</li>
              </ul>
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="film" color="dark">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">
            TAILOR MADE FILM, ANIMATED VIDEO, E-LEARNING & SOFTWARE
          </div>
          <UncontrolledCollapse toggler="#film" className="mt-2">
            <p>
              We enhance our sessions with tailor made film and real life
              footages, animations etc.
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem tag="button" action id="tc" color="success">
          <span className="float-right">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </span>
          <div className="font-weight-bold">TRAINING AND CERTIFICATION</div>
          <UncontrolledCollapse toggler="#tc" className="mt-2">
            <p>
              We provide training & certifications of:
              <ul>
                <li>Scaffolders</li>
                <li>Riggers</li>
                <li>Crane and hydra operator</li>
                <li>Signalman</li>
                <li>Welders</li>
                <li>Grinders and other construction skilled workers.</li>
                <li>Fire fighting</li>
                <li>First aid</li>
              </ul>
            </p>
          </UncontrolledCollapse>
        </ListGroupItem>
      </ListGroup>
      <div className="mt-4">
        <h4 className="font-weight-bold text-dark  text-center">
          <u>OTHER SERVICES</u>
        </h4>
        <ListGroup className="mt-4">
          <ListGroupItem tag="button" action id="epe" color="success">
            <span className="float-right">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-caret-down"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
                />
              </svg>
            </span>
            <div className="font-weight-bold">
              EMPLOYEES’ PARTICIPATION, ENGAGEMENT & MOTIVATIONAL CAMPAIGN
            </div>
            <UncontrolledCollapse toggler="#epe" className="mt-2">
              <p>
                We provide engaging, motivational campaigns for the employees to
                consolidate their learnings in the sessions.
              </p>
            </UncontrolledCollapse>
          </ListGroupItem>
          <ListGroupItem tag="button" action id="rmc" color="dark">
            <span className="float-right">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-caret-down"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
                />
              </svg>
            </span>
            <div className="font-weight-bold">
              ROLLING MILLS CONSULTATION SERVICES
            </div>
            <UncontrolledCollapse toggler="#rmc" className="mt-2">
              <p>
                <ul>
                  <li>Productivity improvement.</li>
                  <li>Technical expert services during breakdown .</li>
                  <li>Reduction of burning loss(Scale)</li>
                  <li>Improvement of Reheating Furnace efficiency</li>
                </ul>
              </p>
            </UncontrolledCollapse>
          </ListGroupItem>
          <ListGroupItem tag="button" action id="sim" color="success">
            <span className="float-right">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-caret-down"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
                />
              </svg>
            </span>
            <div className="font-weight-bold">
              SAFETY INSPECTIONS MAINTAINENCE & OPERATIONS OF FUEL GAS PIPE LINE
            </div>
            <UncontrolledCollapse toggler="#sim" className="mt-2">
              <p>
                We provide safety inspections, maintenance services and
                operations of fuel gas pipe lines.
              </p>
            </UncontrolledCollapse>
          </ListGroupItem>
        </ListGroup>
        <article className="mt-5">
          <p className="lead">
            We provide many more services that is tailor made for your
            organization. In case of a specific service that you may be looking
            for, feel free to{" "}
            <a href="http://ksconsultants.in/contact" rel="noopener noreferrer" target="_blank">
              contact us.
            </a>
          </p>
        </article>
      </div>
    </div>
  );
}
