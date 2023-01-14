# Design

## Main User: The planner

The application's main user is the planner. He is the one that assigns members to their duties.

## Shift

- The operations are divided into shifts.
- Each day may or may not have one shift or more.
- Each shift has multiple shift duties that need to be assigned:
    - Field Responsible     x 1
    - Responsible CFI       x 1
    - Tow Pilot             x 1
    - Maintenance Person    x 2

## Assigning members to shifts

- Each member may be or may not be qualified to one shift duty type or more.
- A member should not be assigned to two shifts on the same day unless explicitly requested.
- A member should not be assigned to shift on consecutive days.
- All members should roughly be assigned to the same number of shifts.
- A member can specify his constraints, and should not be assigned on them.

## Data Model

#### Shift
- id                    :int
- name                  :str
- startAt               :date
- duties                :ref<o2m|ShiftDuty[]>

#### Member
- id                    :int
- name                  :str
- roles                 :ref<m2m|ShiftDutyRole[]>
- assignments           :ref<o2m|ShiftDuty[]>

#### Role
- id                    :int
- name                  :str
- qualifiedMembers      :ref<m2m|Member[]>

#### ShiftDuty
- id                    :int
- roleId                :ref<m2o|ShiftDutyRole>
- shiftId               :ref<m2o|Shift>
- memberId              :ref<m2o|Member>

#### MemberPreference
- id                    :int
- memberId              :ref<m2o|Member>
- shiftId               :ref<m2o|Shift>
- typeId                :ref<m2o|MemberPreferenceType>


#### MemberPreferenceType
- id                    :int
- name                  :str

