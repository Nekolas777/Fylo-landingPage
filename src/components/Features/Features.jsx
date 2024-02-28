import { FeatureCard } from "./FeatureCard";
import data from "../../static/Features.json";

export const Features = () => {

  return (
    <section className="bg-main py-20" id="feature">
      <div className="container-section">
        <div className="grid grid-rows-4 grid-cols-1 gap-16 font-raleway
          md:grid-rows-2 md:grid-cols-2 md:gap-y-16 md:gap-x-20 lg:px-32">
            {
              data.map( item  => 
                <FeatureCard
                  key={item.id} {...item}
                />
              )
            }
        </div>
      </div>
    </section>
  )

}
