import {gql} from 'apollo-angular';
import {GeneralDutyFragment, GeneralMemberFragment, GeneralShiftFragment} from "./fragments";

export const QUERY_GET_MEMBER = gql`
  query GetMember($id:Float!) {
    member(id:$id) {
      ...GeneralMember
    }
  }
  ${GeneralMemberFragment}
`;

export const QUERY_GET_MEMBERS = gql`
  query GetMembers($page: Float!) {
    members(page:$page) {
      ...GeneralMember
    }
  }
  ${GeneralMemberFragment}
`;

export const QUERY_GET_ROLES = gql`

  query GetRoles {
    roles {
      id,
      name,
      duties {
        ...GeneralDuty
      },
      qualifiedMembers {
        id,
        fullName
      }
    }
  }
  ${GeneralDutyFragment}

`

export const QUERY_GET_DUTIES = gql`

  query GetDuties($page: Float!) {
    duties(page:$page) {
      ...GeneralDuty
    }
  }
  ${GeneralDutyFragment}

`

export const QUERY_GET_SHIFTS = gql`

  query GetShifts($page: Float!) {
    shifts(page:$page) {
      ...GeneralShift
    }
  }
  ${GeneralShiftFragment}

`

export const QUERY_GET_MEMBER_PREFERENCES = gql`

  query GetMemberPreferences {
    memberPreferences {
      id,
      member {
        id,
        fullName
      },
      otherMember {
        id,
        fullName
      },
      startDate,
      endDate,
      type
    }
  }

`

export const QUERY_GET_ACTIONS = gql`

  query GetActions($year: Float!, $page: Float!) {
    actions(year:$year, page:$page) {
      id,
      date,
      shifts {
        ...GeneralShift
      }
    }
  }
  ${GeneralShiftFragment}

`
