import {gql} from "apollo-angular";

export const MUTATION_CREATE_MEMBER = gql`
  mutation CreateMember($data:CreateMemberInput!) {
    createMember(data:$data) {
      fullName
    }
  }
`

export const MUTATION_CREATE_SHIFT = gql`
  mutation CreateShift($data:CreateShiftInput!) {
    createShift(data:$data) {
      id
    }
  }
`

export const MUTATION_ENSURE_SHIFTS_FOR_ACTIONS = gql`
  mutation EnsureShiftsForActions($year:Float!) {
    ensureShiftsForActions(year:$year)
  }
`


export const MUTATION_CREATE_MEMBER_PREFERENCE = gql`
  mutation CreateMemberPreference($data:CreateMemberPreferenceInput!) {
    createMemberPreference(data:$data) {
      member {
        id
      }
    }
  }
`

export const MUTATION_ASSIGN_ALL_UNASSIGNED_DUTIES = gql`
  mutation AssignAllUnassignedDuties {
    assignAllUnassignedDuties
  }
`

export const MUTATION_ASSIGN_SINGLE_UNASSIGNED_DUTY = gql`
  mutation AssignSingleUnassignedDuty {
    assignSingleUnassignedDuty
  }
`

export const MUTATION_UNASSIGN_ALL_DUTIES = gql`
  mutation UnassignAllDuties {
    unassignAllDuties
  }
`



export const MUTATION_DELETE_MEMBER_PREFERENCE = gql`
  mutation DeleteMemberPreference($id:Float!) {
    deleteMemberPreference(id:$id)
  }
`

export const MUTATION_DELETE_SHIFT = gql`
  mutation DeleteShift($id:Float!) {
    deleteShift(id:$id)
  }
`

