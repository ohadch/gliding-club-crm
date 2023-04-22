import {gql} from "apollo-angular";

export const GeneralShiftFragment = gql`

  fragment GeneralShift on Shift {
    id,
    action {
      id,
      date
    },
    type,
    duties {
      id,
      member {
        id,
        fullName
      },
      role {
        id,
        name
      }
    }
  }

`

export const GeneralDutyFragment = gql`

  fragment GeneralDuty on Duty {
    id,
    shift {
      ...GeneralShift
    },
    member {
      id,
      fullName
    },
    role {
      id,
      name
    }
  }
  ${GeneralShiftFragment}

`

export const GeneralMemberFragment = gql`
  fragment GeneralMember on Member {
    id,
    firstName,
    lastName,
    fullName,
    queueOrderNumber,
    roles {
      id,
      name
    },
    duties {
      id,
      role {
        id,
        name
      },
      shift {
        id,
        action {
          id,
          date
        },
        type
      },
      role {
        id,
        name
      }
    },
    preferences {
      id,
      type,
      startDate,
      endDate
    }
  }
`
