import AuthLayout from "components/layout/AuthLayout";

const RehabExamination = ({ data }) => {
  return (
    <>
      <div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Aerobic Capacity With Functional Mobility Skill Assessment
          </p>
          <div className="row align-items-center border-bottom border-2 border-dark pb-3">
            <div className="col-4 border-end border-dark">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Aerobic Capacity During Bed Mobility (Modified Borg RPE Scale)
                </p>
                <p className="fs-6">
                  {data?.aerobicCapacity?.during_bed_mobility}
                </p>
              </div>
            </div>
            <div className="col-4 border-end border-dark">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Aerobic Capacity During Transfer Task (Modified Borg RPE
                  Scale)
                </p>
                <p className="fs-6">
                  {data?.aerobicCapacity?.during_transfer_task}
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Aerobic Capacity During Ambulation Task (Modified Borg RPE
                  Scale)
                </p>
                <p className="fs-6">
                  {data?.aerobicCapacity?.during_ambulation_task}
                </p>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-5">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Aerobic Capacity During Standarized Test Includes
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.aerobicCapacity?.during_standarized_test}
                </p>
              </div>
            </div>
            <div className="col-1">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">at RPE</p>
              </div>
            </div>
            <div className="col-3 text-end">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.aerobicCapacity?.at_rpe}</p>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <p className="fs-6 fw-bold">
              Cardiovascular And Pulmonary Signs And Symptoms Related To
              Increase Oxygen Demand
            </p>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Blood Pressure</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.aerobicCapacity?.blood_pressure}</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Breath & voice sounds</p>
              </div>
            </div>
            <div className="col-3 text-end">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.aerobicCapacity?.breath_voice_sounds}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Heart Rate</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.aerobicCapacity?.heart_rate}</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Cyanosis</p>
              </div>
            </div>
            <div className="col-3 text-end">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.aerobicCapacity?.cyanosis}</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Rhythm</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.aerobicCapacity?.rhythm}</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Gas Exchange</p>
              </div>
            </div>
            <div className="col-3 text-end">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.aerobicCapacity?.gas_exchange}</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Sounds</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.aerobicCapacity?.sounds}</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Respiratory Pattern</p>
              </div>
            </div>
            <div className="col-3 text-end">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.aerobicCapacity?.respiratory_pattern}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Angina</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.aerobicCapacity?.angina}</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Respiratory Rate</p>
              </div>
            </div>
            <div className="col-3 text-end">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.aerobicCapacity?.respiratory_rate}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Claudication</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.aerobicCapacity?.claudication}</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Respiratory Rhythm</p>
              </div>
            </div>
            <div className="col-3 text-end">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.aerobicCapacity?.respiratory_rhythm}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Oximetry (%)</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.aerobicCapacity?.oximetry}</p>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.aerobicCapacity?.identified_problems}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <div className="row text-end">
                <div className="col-6">
                  <p>
                    Patients will demonstrate aerobic capacity for bed mobility
                    task to
                  </p>
                </div>
                <div className="col-6">
                  {data?.aerobicCapacity?.shortTerm_bed_mobility}
                </div>
              </div>
              <div className="row text-end">
                <div className="col-6">
                  <p>
                    Patients will demonstrate aerobic capacity for transfer task
                    to
                  </p>
                </div>
                <div className="col-6">
                  {data?.aerobicCapacity?.shortTerm_transfer_task}
                </div>
              </div>
              <div className="row text-end">
                <div className="col-6">
                  <p>
                    Patients will demonstrate aerobic capacity for ambulation
                    task to
                  </p>
                </div>
                <div className="col-6">
                  {data?.aerobicCapacity?.shortTerm_ambulation_task}
                </div>
              </div>
              <div className="row text-end border-bottom border-2 mb-3">
                <div className="col-6">
                  <p>Patients will demonstrate during standarized</p>
                </div>
                <div className="col-2">
                  {data?.aerobicCapacity?.shortTerm_standarized_test}
                </div>
                <div className="col-2 fw-bold text-center">at RPE</div>
                <div className="col-2">
                  {data?.aerobicCapacity?.shortTerm_at_rpe}
                </div>
              </div>
              <p>{data?.aerobicCapacity?.describe_short_term_goals}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <div className="row text-end">
                <div className="col-6">
                  <p>
                    Patients will demonstrate aerobic capacity for bed mobility
                    task to
                  </p>
                </div>
                <div className="col-6">
                  {data?.aerobicCapacity?.longTerm_bed_mobility}
                </div>
              </div>
              <div className="row text-end">
                <div className="col-6">
                  <p>
                    Patients will demonstrate aerobic capacity for transfer task
                    to
                  </p>
                </div>
                <div className="col-6">
                  {data?.aerobicCapacity?.longTerm_transfer_task}
                </div>
              </div>
              <div className="row text-end">
                <div className="col-6">
                  <p>
                    Patients will demonstrate aerobic capacity for ambulation
                    task to
                  </p>
                </div>
                <div className="col-6">
                  {data?.aerobicCapacity?.longTerm_Ambulation_task}
                </div>
              </div>
              <div className="row text-end border-bottom border-2 mb-3">
                <div className="col-6">
                  <p>Patients will demonstrate during standarized</p>
                </div>
                <div className="col-2">
                  {data?.aerobicCapacity?.longTerm_Standarized_test}
                </div>
                <div className="col-2 fw-bold text-center">at RPE</div>
                <div className="col-2">
                  {data?.aerobicCapacity?.longTerm_at_rpe}
                </div>
              </div>
              <p>{data?.aerobicCapacity?.longTerm_description}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <div className="row border-bottom border-2 mb-3">
                <div className="col-6">
                  <p className="fs-6 fw-bold">
                    Aerobic capacity retraining for
                  </p>
                </div>
                <div className="col-6">
                  {data?.aerobicCapacity?.aerobic_capacity_retraining}
                </div>
              </div>
              <p> {data?.aerobicCapacity?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Anthropometric Assessment
          </p>
          <p className="fs-6 fw-bold">Body Composition Assessment Includes</p>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Body Mass Index</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  Height (CM): {data?.abthropometric?.height}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  Weight (KG): {data?.abthropometric?.weight}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">BMI: {data?.abthropometric?.bmi}</p>
              </div>
            </div>
          </div>

          <div className="row border-bottom border-2 border-dark mt-3">
            <p className="fs-6 fw-bold">Body Dimension Includes</p>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Girth Measurement</p>
              </div>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.abthropometric?.body_dimension_grith}
                </p>
              </div>
            </div>

            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Length Measurement</p>
              </div>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.abthropometric?.body_dimension_length}
                </p>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Edema Measurement Includes</p>
              </div>
            </div>
            <div className="col">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  Girth: {data?.abthropometric?.edema_grith}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  Palpation: {data?.abthropometric?.edema_palpation}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  Scales: {data?.abthropometric?.edema_scales}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  Volume: {data?.abthropometric?.edema_volume}
                </p>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.abthropometric?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.abthropometric?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.abthropometric?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.abthropometric?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Circulatory Assessment Includes Arterial / Venous / Lymphatic System
          </p>

          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Physiological Response To Position Change
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.circulatory_assesment?.physiological_response}
                </p>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Peripheral Venous, Arterial And Lymphatic Circulation
                  Assessment, Skincolour And Nail Changes.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.circulatory_assesment?.peripheral_venous}
                </p>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Presence Of Bruits, Abnormal Heart Sounds, Rate Or Rhytm,Vital
                  Signs At Rest
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.circulatory_assesment?.presence_of_bruits}
                </p>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p> {data?.circulatory_assesment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p> {data?.circulatory_assesment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p> {data?.circulatory_assesment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p> {data?.circulatory_assesment?.traetment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Arousal, Attention And Cognitive Assessment
          </p>

          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Attention</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.arousal_assesment?.attention}</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Focussed</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.arousal_assesment?.focussed}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Sustained</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.arousal_assesment?.sustained}</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Selective</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.arousal_assesment?.selective}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Alternating</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.arousal_assesment?.alternating}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Orientation</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.arousal_assesment?.orientation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-8">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">
                      Ability To Recognise Time, Person, Place
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.arousal_assesment?.ability_to_recognise}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Consciousness</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.arousal_assesment?.consciousness}
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Motivation To Participate</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.arousal_assesment?.motivation_to_participate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Communication</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.arousal_assesment?.communication}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold">Problem Solving</p>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Preparation</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.arousal_assesment?.preparation}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Production</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.arousal_assesment?.production}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Judgement</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.arousal_assesment?.judgement}</p>
                  </div>
                </div>
                <div className="col-3"></div>
                <div className="col-3"></div>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold">Short term Memory</p>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">Mini Mental Test</p>
            </div>
            <div className="col-6">
              <p className="fs-6">
                {data?.arousal_assesment?.mini_mental_test}
              </p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.arousal_assesment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.arousal_assesment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.arousal_assesment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.arousal_assesment?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Cranial And Peripheral Nerve Assessment
          </p>
          <p className="fs-6 fw-bold">Cranial Nerve Examination</p>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Olfactory</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.olfactory}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Optic</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.optic}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Occulomotor</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.occulomotor}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Trochlear</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.trochlear}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Trigeminal</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.trigeminal}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Abducens</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.abducens}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Facial Nerve</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.facial_nerve}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Vestibulocohlear</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.vestibulocohlear}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Glossophoryngeal</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.glossophoryngeal}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Vagus</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.vagus}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Accessory</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.accessory}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Hypoglossal</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.cranial_peripheral_assesment?.hypoglossal}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Peripheral Nerve Examination</p>
            </div>
            <div className="col-9">
              <p>
                {
                  data?.cranial_peripheral_assesment
                    ?.peripheral_nerve_nxamination
                }
              </p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.cranial_peripheral_assesment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.cranial_peripheral_assesment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.cranial_peripheral_assesment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.cranial_peripheral_assesment?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Reflex And Sensory Assessment
          </p>

          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">
                Deep Tendon Reflex And Supercial Reflex Examination
              </p>
            </div>
            <div className="col-6">
              <p>{data?.reflex_sensory_assessment?.reflex_examination}</p>
            </div>
          </div>
          <p className="fs-6 fw-bold">Samatosensory Assessment</p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Discriminative Touch</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Touch Awareness</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.reflex_sensory_assessment?.touch_awareness}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Touch Localization</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.reflex_sensory_assessment?.touch_localization}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Touch Pressure Threshold</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {
                        data?.reflex_sensory_assessment
                          ?.touch_pressure_threshold
                      }
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Two Point Discrimination</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {
                        data?.reflex_sensory_assessment
                          ?.two_point_discrimination
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Plain</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Sharp</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.reflex_sensory_assessment?.sharp}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Dull</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.reflex_sensory_assessment?.dull}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Proprioception</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Vibration</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.reflex_sensory_assessment?.vibration}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Joint Position</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.reflex_sensory_assessment?.joint_position}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Joint Motion</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.reflex_sensory_assessment?.joint_motion}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Stereognosis</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.reflex_sensory_assessment?.stereognosis}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Temperature</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Hot</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.reflex_sensory_assessment?.hot}
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Cold</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.reflex_sensory_assessment?.cold}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.reflex_sensory_assessment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.reflex_sensory_assessment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.reflex_sensory_assessment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.reflex_sensory_assessment?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Postural Assessment
          </p>
          <p className="fs-6 fw-bold">Segmental Alignment</p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Feet</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.postural_assessment?.fett}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Knee</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.postural_assessment?.knee}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Pelvis</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.postural_assessment?.pelvis}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Lower Back</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.postural_assessment?.lower_back}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Upper Back</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.postural_assessment?.upper_back}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Thorax</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.postural_assessment?.thorax}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Spine</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.postural_assessment?.spine}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Abdomen</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.postural_assessment?.abdomen}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Shoulder</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.postural_assessment?.shoulder}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Head</p>
            </div>
            <div className="col-9">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.postural_assessment?.head}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.postural_assessment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.postural_assessment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.postural_assessment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.postural_assessment?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Gait Assessment
          </p>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Heel Strike To Foot Flat (Ankle)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.heel_strike_ankle}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Heel Strike To Foot Flat (Knee)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.heel_strike_knee}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Heel Strike To Foot Flat (Hip)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.heel_strike_hip}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Heel Strike To Foot Flat (Trunk)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.heel_strike_trunk}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Foot Flat To Mid Stance (Ankle)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.foot_flat_ankle}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Foot Flat To Mid Stance (Knee)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.foot_flat_knee}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Foot Flat To Mid Stance (Hip)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.foot_flat_hip}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Foot Flat To Mid Stance (Trunk)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.foot_flat_trunk}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Heel Off To Toe Off (Ankle)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.heel_of_ankle}</p>
            </div>
          </div>

          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Acceleration To Mid Swing (Ankle)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.acceleration_ankle}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Acceleration To Mid Swing (Knee)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.acceleration_knee}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <p className="fs-6 fw-bold">Acceleration To Mid Swing (Hip)</p>
            </div>
            <div className="col-8">
              <p>{data?.gait_assesment?.acceleration_hip}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.gait_assesment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.gait_assesment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.gait_assesment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.gait_assesment?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Postural Control Or Balance Assessment
          </p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">
                1. Functional Performance Test And Measures
              </p>
            </div>
            <div className="col-6">
              <p>
                {data?.postural_control_assesment?.functional_performance_score}
              </p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">A. Get up and go test</p>
            </div>
            <div className="col-6">
              <p>{data?.postural_control_assesment?.getup_go_test}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">B. Functional reach test</p>
            </div>
            <div className="col-6">
              <p>{data?.postural_control_assesment?.functional_reach_test}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">C. Tinetti,s Test</p>
            </div>
            <div className="col-6">
              <p>{data?.postural_control_assesment?.tinetti_test}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">D. Berg Balance Test</p>
            </div>
            <div className="col-6">
              <p>{data?.postural_control_assesment?.berge_balance_test}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">2. Motor Strategy Level Test</p>
            </div>
            <div className="col-6">
              <p>{data?.postural_control_assesment?.motor_strategy_score}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">A. Alignment In Sitting And Standing</p>
            </div>
            <div className="col-6">
              <p>
                {data?.postural_control_assesment?.alignment_sitting_standing}
              </p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">
                B. Movement Strategy in Sitting and Standing
              </p>
            </div>
            <div className="col-6">
              <p>
                {data?.postural_control_assesment?.movement_sitting_standing}
              </p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">
                3. Sensory Strategy Level Assessment
              </p>
            </div>
            <div className="col-6">
              <p>{data?.postural_control_assesment?.sensory_strategy_score}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">
                Clinical Test for Sensory Interaction in Balance(CTSIB)
              </p>
            </div>
            <div className="col-6">
              <p>{data?.postural_control_assesment?.ctsib}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">
                4. Factors Impacted On Normal Postural Control Includes
              </p>
            </div>
            <div className="col-6">
              <p>{data?.postural_control_assesment?.factors_impacted_score}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">Cognitive Impairment</p>
            </div>
            <div className="col-6">
              <p>{data?.postural_control_assesment?.cognitive_impairment}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">Musculoskeletal Impairmentt</p>
            </div>
            <div className="col-6">
              <p>
                {data?.postural_control_assesment?.musculoskeletal_impairment}
              </p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">Neuromuscular Impairment</p>
            </div>
            <div className="col-6">
              <p>{data?.postural_control_assesment?.neuromuscular_mpairment}</p>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <p className="fs-6">Perceptual Impairment</p>
            </div>
            <div className="col-6">
              <p>{data?.postural_control_assesment?.perceptual_impairment}</p>
            </div>
          </div>
          <div className="row align-items-start border-bottom border-2 border-dark mt-3 pb-3">
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered border-dark">
                  <tr className="text-center">
                    <th colSpan="3">Sitting</th>
                  </tr>
                  <tr className="text-center">
                    <td>Small Movement</td>
                    <td>
                      <p className="fs-6">
                        {
                          data?.postural_control_assesment
                            ?.sitting_small_movement
                        }
                      </p>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>Large Movement</td>
                    <td>
                      <p className="fs-6">
                        {
                          data?.postural_control_assesment
                            ?.sitting_large_movement
                        }
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered border-dark">
                  <tr className="text-center">
                    <th colSpan="3">Standing</th>
                  </tr>
                  <tr className="text-center">
                    <td>Ankle Strategy</td>
                    <td>
                      <p className="fs-6">
                        {
                          data?.postural_control_assesment
                            ?.standing_ankle_strategy
                        }
                      </p>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>Hip Strategy</td>
                    <td>
                      <p className="fs-6">
                        {
                          data?.postural_control_assesment
                            ?.standing_hip_strategy
                        }
                      </p>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>Stepping Strategy</td>
                    <td>
                      <p className="fs-6">
                        {data?.postural_control_assesment?.stepping_strategy}
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.postural_control_assesment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.postural_control_assesment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.postural_control_assesment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.postural_control_assesment?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Motor Function Assessment Includes Motor Control And Motor Learning
          </p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">Muscle Tone</p>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.motor_function_assesment?.muscle_tone}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-5">
              <p className="fs-6 fw-bold">
                Abnormal Muscle Tone Assessment By Modified Ashworth Scale(MAS)
              </p>
            </div>
            <div className="col-7">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.motor_function_assesment?.modified_ashworth_scale}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Coordination Test</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.motor_function_assesment?.coordination_test}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Involuntory Movement Assessment</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.motor_function_assesment?.involuntory_movement}
                </p>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.motor_function_assesment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.motor_function_assesment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.motor_function_assesment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.motor_function_assesment?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Manual Muscle Strength And Range Of Motion Assessment
          </p>
          <div className="rehab-table border-bottom border-2 border-dark pb-3">
            <table className="table table-bordered border-dark">
              <tr className="text-center">
                <th></th>
                <th></th>
                <th>WNL Value</th>
                <th>WFL Value</th>

                <th>Range Of Motion Score</th>
                <th>Strength</th>
              </tr>

              <tr className="text-center">
                <td
                  className="fs-5 fw-bold"
                  rowSpan="5"
                  style={{ width: "70px" }}
                >
                  HIP
                </td>

                <td>
                  <p>Flexion / Flexors</p>
                </td>
                <td>0-120</td>
                <td>0-120</td>
                <td>
                  <p>{data?.manual_muscle_assesment?.hip_flexion_score}</p>
                </td>
                <td>
                  <p>{data?.manual_muscle_assesment?.hip_flexion_strength}</p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>Extension / Extensors</p>
                </td>
                <td>0-20</td>
                <td>0-20</td>
                <td>
                  <p>{data?.manual_muscle_assesment?.hip_extension_score}</p>
                </td>
                <td>
                  <p>{data?.manual_muscle_assesment?.hip_extension_strength}</p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>Abduction / Abductors</p>
                </td>
                <td>0-45</td>
                <td>0-45</td>
                <td>
                  <p>{data?.manual_muscle_assesment?.hip_abduction_score}</p>
                </td>
                <td>
                  <p>{data?.manual_muscle_assesment?.hip_abduction_strength}</p>
                </td>
              </tr>

              <tr className="text-center">
                <td>
                  <p>External Rotation / External Rotators</p>
                </td>
                <td>0-45</td>
                <td>0-45</td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.hip_externalRotation_score}
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.hip_externalRotation_strength
                    }
                  </p>
                </td>
              </tr>

              <tr className="text-center">
                <td>
                  <p>Internal Rotation / Internal Rotators</p>
                </td>
                <td>0-30</td>
                <td>0-30</td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.hip_internalRotation_score}
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.hip_internalRotation_strength
                    }
                  </p>
                </td>
              </tr>

              <tr className="text-center">
                <td
                  className="fs-5 fw-bold"
                  rowSpan="3"
                  style={{ width: "70px" }}
                >
                  KNEE
                </td>

                <td>
                  <p>Flexion</p>
                </td>
                <td>0-145</td>
                <td>0-145</td>
                <td>
                  <p>{data?.manual_muscle_assesment?.knee_flexion_score}</p>
                </td>
                <td>
                  <p>{data?.manual_muscle_assesment?.knee_flexion_strength}</p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>Extension </p>
                </td>
                <td>145-0</td>
                <td>145-0</td>
                <td>
                  <p>{data?.manual_muscle_assesment?.knee_extension_score}</p>
                </td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.knee_extension_strength}
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>STRAIGHT LEG RAISE</p>
                </td>
                <td>0-90</td>
                <td>0-90</td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.knee_straightLegRaise_score}
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.knee_straightLegRaise_strength
                    }
                  </p>
                </td>
              </tr>

              <tr className="text-center">
                <td
                  className="fs-5 fw-bold"
                  rowSpan="4"
                  style={{ width: "70px" }}
                >
                  ANKLE
                </td>

                <td>
                  <p>DORSIFLEXION/FLEXORS</p>
                </td>
                <td>0-20</td>
                <td>0-20</td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.ankle_dorsiflexion_score}
                  </p>
                </td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.ankle_dorsiflexion_strength}
                  </p>
                </td>
              </tr>

              <tr className="text-center">
                <td>
                  <p>PLANTERFLEXION/FLEXORS</p>
                </td>
                <td>0-50</td>
                <td>0-50</td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.ankle_planterflexion_score}
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.ankle_planterflexion_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>INVERSION/INVERTORS</p>
                </td>
                <td>0-15</td>
                <td>0-15</td>
                <td>
                  <p>{data?.manual_muscle_assesment?.ankle_inversion_score}</p>
                </td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.ankle_inversion_strength}
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>EVERSION/EVERTORS</p>
                </td>
                <td>0-20</td>
                <td>0-20</td>
                <td>
                  <p>{data?.manual_muscle_assesment?.ankle_eversion_score}</p>
                </td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.ankle_eversion_strength}
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td
                  className="fs-5 fw-bold"
                  rowSpan="6"
                  style={{ width: "70px" }}
                >
                  CERVICAL
                </td>

                <td>
                  <p> FLEXION / FLEXORS</p>
                </td>
                <td>40-70</td>
                <td>40-70</td>
                <td>
                  <p>{data?.manual_muscle_assesment?.cervical_flexion_score}</p>
                </td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.cervical_flexion_strength}
                  </p>
                </td>
              </tr>

              <tr className="text-center">
                <td>
                  <p>EXTENSION / EXTENSORS</p>
                </td>
                <td>60-80</td>
                <td>60-80</td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.cervical_extension_score}
                  </p>
                </td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.cervical_extension_strength}
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                </td>
                <td>40-50</td>
                <td>40-50</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.cervical_sideflexion_left_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.cervical_sideflexion_left_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                </td>
                <td>40-50</td>
                <td>40-50</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.cervical_sideflexion_rigth_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.cervical_sideflexion_rigth_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>ROTATION / ROTATORS (LEFT)</p>
                </td>
                <td>70-90</td>
                <td>70-90</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.cervical_rotation_left_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.cervical_rotation_left_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>ROTATION / ROTATORS (RIGHT)</p>
                </td>
                <td>70-90</td>
                <td>70-90</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.cervical_rotation_rigth_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.cervical_rotation_rigth_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td
                  className="fs-5 fw-bold"
                  rowSpan="7"
                  style={{ width: "70px" }}
                >
                  THORACIC
                </td>

                <td>
                  <p> FLEXION / FLEXORS</p>
                </td>
                <td>20-30</td>
                <td>20-30</td>
                <td>
                  <p>{data?.manual_muscle_assesment?.thoracic_flexion_score}</p>
                </td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.thoracic_flexion_strength}
                  </p>
                </td>
              </tr>

              <tr className="text-center">
                <td>
                  <p>EXTENSION / EXTENSORS</p>
                </td>
                <td>25-35</td>
                <td>25-35</td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.thoracic_extension_score}
                  </p>
                </td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.thoracic_extension_strength}
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                </td>
                <td>20-25</td>
                <td>20-25</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.thoracic_sideFlexion_left_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.thoracic_sideFlexion_left_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                </td>
                <td>20-25</td>
                <td>20-25</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.thoracic_sideFlexion_right_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.thoracic_sideFlexion_right_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>ROTATION / ROTATORS (LEFT)</p>
                </td>
                <td>5-10</td>
                <td>5-10</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.thoracic_rotation_left_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.thoracic_rotation_left_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>ROTATION / ROTATORS (RIGHT)</p>
                </td>
                <td>5-10</td>
                <td>5-10</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.thoracic_rotation_right_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.thoracic_rotation_rigth_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>KYPOSIS POSTURE</p>
                </td>
                <td>30-40</td>
                <td>30-40</td>
                <td>
                  <p>{data?.manual_muscle_assesment?.thoracic_kyposis_score}</p>
                </td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.thoracic_kyposis_strength}
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td
                  className="fs-5 fw-bold"
                  rowSpan="11"
                  style={{ width: "70px" }}
                >
                  LUMBAR
                </td>

                <td>
                  <p> SACRAL INCLINATION ANGLE</p>
                </td>
                <td>15-30</td>
                <td>15-30</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_sacralinclination_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_sacralinclination_strength
                    }
                  </p>
                </td>
              </tr>

              <tr className="text-center">
                <td>
                  <p>STANDING LORDOSIS</p>
                </td>
                <td>25-40</td>
                <td>25-40</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_standinglordosis_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_standinglordosis_strength
                    }
                  </p>
                </td>
              </tr>

              <tr className="text-center">
                <td>
                  <p>STANDING HIP FLEXION</p>
                </td>
                <td>45-65</td>
                <td>45-65</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_standinghipflexion_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_standinghipflexion_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>FLEXION (AMA method)</p>
                </td>
                <td>40-75</td>
                <td>40-75</td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.lumbar_flexionAMA_score}
                  </p>
                </td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.lumbar_flexionAMA_strength}
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>EXTENSION (AMA method)</p>
                </td>
                <td>20-35</td>
                <td>20-35</td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.lumbar_extensionAMA_score}
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_extensionAMA_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>FLEXION (curve angle method)</p>
                </td>
                <td>0-20</td>
                <td>0-20</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_flexion_curveangle_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_flexion_curveangle_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>EXTENSION (curve angle method)</p>
                </td>
                <td>60-75</td>
                <td>60-75</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_extention_curveangle_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_extention_curveangle_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                </td>
                <td>15-35</td>
                <td>15-35</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_sideflexion_left_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_sideflexion_left_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                </td>
                <td>15-35</td>
                <td>15-35</td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_sideflexion_right_score
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_sideflexion_right_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>ROTATION / ROTATORS (LEFT)</p>
                </td>
                <td>10-20</td>
                <td>10-20</td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.lumbar_rotation_left_score}
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_rotation_left_strength
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <p>ROTATION / ROTATORS (RIGHT)</p>
                </td>
                <td>10-20</td>
                <td>10-20</td>
                <td>
                  <p>
                    {data?.manual_muscle_assesment?.lumbar_rotation_right_score}
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.manual_muscle_assesment
                        ?.lumbar_rotation_right_strength
                    }
                  </p>
                </td>
              </tr>
            </table>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.manual_muscle_assesment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.manual_muscle_assesment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.manual_muscle_assesment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.manual_muscle_assesment?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Pain Assessment
          </p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Onset of Pain</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.pain_assessment?.onset_of_pain}</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Location of Pain</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.pain_assessment?.location_of_pain}
                </p>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold">Description Of Pain</p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Vascular</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.pain_assessment?.vascular}</p>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold">Description Of Pain</p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Neurogenic</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.pain_assessment?.neurogenic}</p>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold">Description Of Pain</p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Musculoskeletal</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.pain_assessment?.musculoskeletal}</p>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold">Description Of Pain</p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Emotional</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.pain_assessment?.emotional}</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Type of Pain</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.pain_assessment?.type_of_pain}</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <p className="fs-6 fw-bold">Severity of Pain Scale</p>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.pain_assessment?.severity_of_pain_scale}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <p className="fs-6 fw-bold">Severity of Pain Value</p>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.pain_assessment?.severity_of_pain_value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Frequency of Pain</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.pain_assessment?.frequency_of_pain}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Duration Of Pain (In Hrs)</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.pain_assessment?.duration_of_pain}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Aggravating Factor Of Pain</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.pain_assessment?.aggravating_factor_of_pain}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Releiving Factor of Pain</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.pain_assessment?.releiving_factor_of_pain}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">
                Relieving Of Pain With Medication (Include Type Of
                Medication,Dosage And Hours Of Releive)
              </p>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.pain_assessment?.releiving_pain_medication}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Pattern Of Joint Involvement</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.pain_assessment?.pattern_of_joint_involvement}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Joint Irritability</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.pain_assessment?.joint_irritability}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Progress Of Pain</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.pain_assessment?.progress_of_pain}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Worse Problem (Loss Of Function)</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.pain_assessment?.worse_problem}</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Related Signs And Symptoms</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">{data?.pain_assessment?.related_signs}</p>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.pain_assessment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.pain_assessment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.pain_assessment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.pain_assessment?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Environmental Barrier Assessment
          </p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Environmental Barrier</p>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {
                    data?.environmental_barrier_assessmnet
                      ?.environmental_barriers
                  }
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Facilitators Assessment</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {
                    data?.environmental_barrier_assessmnet
                      ?.facilitators_assessmnet
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">
                Individual Attitudes Of Immediate Family Members
              </p>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.environmental_barrier_assessmnet?.family_members}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">Individual Attitudes Of Friends</p>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.environmental_barrier_assessmnet?.friends}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">
                Individual Attitudes Of Personal Care Providers And
              </p>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {
                    data?.environmental_barrier_assessmnet
                      ?.personal_care_provider
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">Personal Assistants</p>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.environmental_barrier_assessmnet?.personal_assistants}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">
                Individual Attitudes Of Health Professionals
              </p>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.environmental_barrier_assessmnet?.health_professionals}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">Societal Attitudes</p>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.environmental_barrier_assessmnet?.societal_attitudes}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-6">
              <p className="fs-6 fw-bold">
                Social Norms, Practices And Ideologies
              </p>
            </div>
            <div className="col-6">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.environmental_barrier_assessmnet?.social_norms}
                </p>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3 mt-3">
            Home And Work Barrier Assessment
          </p>
          <div className="items-rehab-clinic">
            <p className="fs-6">
              {data?.environmental_barrier_assessmnet?.home_work_barrier}
            </p>
          </div>

          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>
                {data?.environmental_barrier_assessmnet?.identified_problems}
              </p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.environmental_barrier_assessmnet?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.environmental_barrier_assessmnet?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.environmental_barrier_assessmnet?.treatment_plans}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Orthotic Assessment
          </p>
          <p className="fs-6 fw-bold pb-3 mt-3">Orthotic Assessment</p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Type of Device</p>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.orthotic_assessment?.type_of_device}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Alignment And Fitting of Orthosis
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.orthotic_assessment?.alignment_fitting}
                </p>
              </div>
            </div>
            <div className="col-3">
              <p className="fs-6 fw-bold">
                Patinet ability and care of the device
              </p>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.orthotic_assessment?.patinet_ability}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Level of safety of the devices</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.orthotic_assessment?.level_of_safety}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Movement analysis with and without device
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.orthotic_assessment?.movement_analysis}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Functional effect and benefits of use of the device
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.orthotic_assessment?.functional_effect}
                </p>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold pb-3 mt-3 text-center">
            Prosthesis Assessment
          </p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Type of Prosthesis</p>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.prosthetic_assessment?.type_of_device}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Alignment And Fitting of Orthosis
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.prosthetic_assessment?.alignment_fitting}
                </p>
              </div>
            </div>
            <div className="col-3">
              <p className="fs-6 fw-bold">
                Patinet ability and care of the device
              </p>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.prosthetic_assessment?.patinet_ability}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Level of safety of the devices</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.prosthetic_assessment?.level_of_safety}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Movement analysis with and without device
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.prosthetic_assessment?.movement_analysis}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Functional effect and benefits of use of the device
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.prosthetic_assessment?.functional_effect}
                </p>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold pb-3 mt-3 text-center">
            Adaptive Equipment Assessment
          </p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Type of Device</p>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.adaptive_equipment_assessment?.type_of_device}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Alignment And Fitting of Orthosis
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.adaptive_equipment_assessment?.alignment_fitting}
                </p>
              </div>
            </div>
            <div className="col-3">
              <p className="fs-6 fw-bold">
                Patinet ability and care of the device
              </p>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.adaptive_equipment_assessment?.patinet_ability}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Level of safety of the devices</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.adaptive_equipment_assessment?.level_of_safety}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Movement analysis with and without device
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.adaptive_equipment_assessment?.movement_analysis}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">
                  Functional effect and benefits of use of the device
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.adaptive_equipment_assessment?.functional_effect}
                </p>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold pb-3 mt-3 text-center">
            Wheel Chair Assessment
          </p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-12 text-center">
              <p className="fs-6 pb-3 mt-3">
                Type :{data?.wheel_chair_assessment?.type}
              </p>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">A: Shoulder Width</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.A}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">B: Chest Width</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.B}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">C: Chect Depth (Front-Back)</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.C}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">D1: Hip Width</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.D1}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">D2: Degree of Hip Flexion</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.D2}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">E: Between Knees</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.E}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">F: Top to Head</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.F}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">G: Occiput</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.G}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">H: Top To Shoulder</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.H}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">
                    I: Acromium Process(Tip to Shoulder)
                  </p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.I}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">J: Infeior Angie of Scapula</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.J}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">K: Elbow</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.K}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">L: Liac Crest</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.L}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">M: Sacrum to Popliteal Fossa</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.M}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">N: Knee to Heel</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.N}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">O: Foot Length</p>
                </div>
                <div className="col-6">
                  <p>{data?.wheel_chair_assessment?.O}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.wheel_chair_assessment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.wheel_chair_assessment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.wheel_chair_assessment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.wheel_chair_assessment?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Joint Integrety And Mobility Assessment
          </p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Apprehension Test</p>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.joint_integrety_mobility_assessmnet?.apprehension_test}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Compression And Distraction Test</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {
                    data?.joint_integrety_mobility_assessmnet
                      ?.compression_distraction_test
                  }
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Drawer Test</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.joint_integrety_mobility_assessmnet?.drawer_test}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Glide Test</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.joint_integrety_mobility_assessmnet?.glide_test}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Impingement Test</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.joint_integrety_mobility_assessmnet?.impingement_test}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Palpation</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.joint_integrety_mobility_assessmnet?.palpation}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Shear Test</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.joint_integrety_mobility_assessmnet?.shear_tests}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Valgus And Varus Stress Test</p>
              </div>
            </div>
            <div className="col-3">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {
                    data?.joint_integrety_mobility_assessmnet
                      ?.valgus_varus_stress_test
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>
                {data?.joint_integrety_mobility_assessmnet?.identified_problems}
              </p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>
                {data?.joint_integrety_mobility_assessmnet?.short_term_goals}
              </p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>
                {data?.joint_integrety_mobility_assessmnet?.long_term_goals}
              </p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.joint_integrety_mobility_assessmnet?.treatment_plan}</p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            VENTILATION,RESPIRATION AND GAS EXCHANGE
          </p>
          <div className="rehab-table border-bottom border-2 border-dark pb-3">
            <table className="table table-bordered">
              <tr className="text-center">
                <th></th>
                <th></th>
                <th>VALUE</th>
              </tr>

              <tr className="text-center">
                <td>CHEST WALL AND RELATED STRUCTURES</td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.chest_wall_text
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.chest_wall_value
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>PHONATION</td>

                <td>
                  <p>
                    {data?.ventilation_respiration_gas_exchange?.phonation_text}
                  </p>
                </td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.phonation_value
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>PULMONARY RELATED SYMPTOMS</td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.pulmonary_related_text
                    }
                  </p>
                </td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.pulmonary_related_text
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>PULMONARY VITAL SIGNS</td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.pulmonary_vital_text
                    }
                  </p>
                </td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.pulmonary_vital_value
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>THORACOABDOMINAL VENTILATORY PATTERNS</td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.thoracoabdominal_text
                    }
                  </p>
                </td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.thoracoabdominal_value
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>PRESENCE AND LEVEL OF CYANOSIS</td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.presence_level_text
                    }
                  </p>
                </td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.presence_level_value
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>Ability to clear and protect airways</td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.protect_airways_text
                    }
                  </p>
                </td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.protect_airways_value
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>Gas exchange and oxygen level/transport</td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.gas_exchange_text
                    }
                  </p>
                </td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.gas_exchange_value
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>pulmonary function and ventilatory mechanism</td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.ventilatory_mechanism_text
                    }
                  </p>
                </td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.ventilatory_mechanism_value
                    }
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td>BREATH AND VOICE SOUNDS</td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.breath_voice_text
                    }
                  </p>
                </td>

                <td>
                  <p>
                    {
                      data?.ventilation_respiration_gas_exchange
                        ?.breath_voice_value
                    }
                  </p>
                </td>
              </tr>
            </table>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>
                {
                  data?.ventilation_respiration_gas_exchange
                    ?.identified_problems
                }
              </p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>
                {data?.ventilation_respiration_gas_exchange?.short_term_goals}
              </p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>
                {data?.ventilation_respiration_gas_exchange?.long_term_goals}
              </p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>
                {data?.ventilation_respiration_gas_exchange?.treatment_plan}
              </p>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
            Wound Assessment
          </p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">Location</p>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.wound_assessment?.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Type of Ulcer</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.wound_assessment?.type_of_ulcer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">Stage</p>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.wound_assessment?.stage}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">
                      Thickness of Non-Pressure Ulce
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.wound_assessment?.thickness_of_ulcer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Size</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.wound_assessment?.size}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Depth</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.wound_assessment?.depth}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Tunneling</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.wound_assessment?.tunnelling}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Undermining</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.wound_assessment?.undermining}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Necrotic Tissue (%)</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.wound_assessment?.necrotic_tissue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Slough (%)</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.wound_assessment?.slough}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Granulation Tissue (%)</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.wound_assessment?.granulation_tissue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Epitheliazation in Process</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">
                      {data?.wound_assessment?.epitheliazation_in_process}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold pb-3 mt-3 text-center">Exudate</p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">Amount</p>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.wound_assessment?.amount}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6 fw-bold">Color</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.wound_assessment?.color}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="fs-6 fw-bold">Odor</p>
                </div>
                <div className="col-6">
                  <div className="items-rehab-clinic">
                    <p className="fs-6">{data?.wound_assessment?.odor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="fs-6 fw-bold pb-3 mt-3 text-center">
            Pain : {data?.wound_assessment?.pain}
          </p>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-4">
              <div className="items-rehab-clinic">
                <p className="fs-6 fw-bold">Describe surrounding tissue</p>
              </div>
            </div>
            <div className="col-4">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.wound_assessment?.describe_surrounding_tissue}
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Signs Of Infection</p>
            </div>
            <div className="col-9">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.wound_assessment?.signs_of_infection}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center border-bottom border-2 border-dark mt-3">
            <div className="col-5">
              <p className="fs-6 fw-bold">
                Presence Of Pressure Recucing / Relieving Devices
              </p>
            </div>
            <div className="col-7">
              <div className="items-rehab-clinic">
                <p className="fs-6">
                  {data?.wound_assessment?.recucing_relieving_devices}
                </p>
              </div>
            </div>
          </div>

          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Describe device in place</p>
            </div>
            <div className="col-9">
              <p>{data?.wound_assessment?.describe_device}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Positioning Concerns</p>
            </div>
            <div className="col-9">
              <p>{data?.wound_assessment?.positioning_concerns}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Dressing to be used</p>
            </div>
            <div className="col-9">
              <p>{data?.wound_assessment?.dressing_tobe_used}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Barriers to Progress</p>
            </div>
            <div className="col-9">
              <p>{data?.wound_assessment?.barriers_to_progress}</p>
            </div>
          </div>

          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Identified Problems</p>
            </div>
            <div className="col-9">
              <p>{data?.wound_assessment?.identified_problems}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Short Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.wound_assessment?.short_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Long Term Goals</p>
            </div>
            <div className="col-9">
              <p>{data?.wound_assessment?.long_term_goals}</p>
            </div>
          </div>
          <div className="row border-bottom border-2 border-dark mt-3">
            <div className="col-3">
              <p className="fs-6 fw-bold">Treatment Plan</p>
            </div>
            <div className="col-9">
              <p>{data?.wound_assessment?.treatment_plan}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RehabExamination;

RehabExamination.getLayout = (RehabExamination) => (
  <AuthLayout>{RehabClinicalExam}</AuthLayout>
);
