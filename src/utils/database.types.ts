export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      admin_profiles: {
        Row: {
          adminname: string
          createdAt: string
          email: string
          fullname: string
          id: string
          imageurl: string | null
          password: string
          phone: string
          updatedAt: string
        }
        Insert: {
          adminname: string
          createdAt?: string
          email: string
          fullname: string
          id: string
          imageurl?: string | null
          password: string
          phone: string
          updatedAt: string
        }
        Update: {
          adminname?: string
          createdAt?: string
          email?: string
          fullname?: string
          id?: string
          imageurl?: string | null
          password?: string
          phone?: string
          updatedAt?: string
        }
        Relationships: []
      }
      animations: {
        Row: {
          animation_data: Json[] | null
          canvas_data: Json
          createdAt: string
          description: string
          format: string
          id: string
          license: string
          likes: number
          name: string
          orientation: string
          serial_no: number
          shares: number
          updatedAt: string
        }
        Insert: {
          animation_data?: Json[] | null
          canvas_data: Json
          createdAt?: string
          description: string
          format: string
          id: string
          license: string
          likes: number
          name: string
          orientation: string
          serial_no?: number
          shares: number
          updatedAt: string
        }
        Update: {
          animation_data?: Json[] | null
          canvas_data?: Json
          createdAt?: string
          description?: string
          format?: string
          id?: string
          license?: string
          likes?: number
          name?: string
          orientation?: string
          serial_no?: number
          shares?: number
          updatedAt?: string
        }
        Relationships: []
      }
      animations_category: {
        Row: {
          animation_id: string
          category_id: string
          createdAt: string
          updatedAt: string
        }
        Insert: {
          animation_id: string
          category_id: string
          createdAt?: string
          updatedAt: string
        }
        Update: {
          animation_id?: string
          category_id?: string
          createdAt?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "animations_category_animation_id_fkey"
            columns: ["animation_id"]
            isOneToOne: false
            referencedRelation: "animations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "animations_category_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
        ]
      }
      animations_tag: {
        Row: {
          animation_id: string
          createdAt: string
          tag_id: string
          updatedAt: string
        }
        Insert: {
          animation_id: string
          createdAt?: string
          tag_id: string
          updatedAt: string
        }
        Update: {
          animation_id?: string
          createdAt?: string
          tag_id?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "animations_tag_animation_id_fkey"
            columns: ["animation_id"]
            isOneToOne: false
            referencedRelation: "animations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "animations_tag_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      animations_url: {
        Row: {
          animation_data: Json[] | null
          animation_id: string
          canvas_data: Json
          createdAt: string
          description: string
          format: string
          license: string
          likes: number
          name: string
          orientation: string
          serial_no: number
          shares: number
          thumbnail_url: string
          updatedAt: string
        }
        Insert: {
          animation_data?: Json[] | null
          animation_id: string
          canvas_data: Json
          createdAt?: string
          description: string
          format: string
          license: string
          likes: number
          name: string
          orientation: string
          serial_no?: number
          shares: number
          thumbnail_url: string
          updatedAt: string
        }
        Update: {
          animation_data?: Json[] | null
          animation_id?: string
          canvas_data?: Json
          createdAt?: string
          description?: string
          format?: string
          license?: string
          likes?: number
          name?: string
          orientation?: string
          serial_no?: number
          shares?: number
          thumbnail_url?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "animations_url_animation_id_fkey"
            columns: ["animation_id"]
            isOneToOne: true
            referencedRelation: "animations"
            referencedColumns: ["id"]
          },
        ]
      }
      category: {
        Row: {
          createdAt: string
          description: string
          id: string
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          description: string
          id: string
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          description?: string
          id?: string
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      image: {
        Row: {
          createdAt: string
          id: string
          image_name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          image_name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          image_name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          createdAt: string
          description: string
          id: string
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          description: string
          id: string
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          description?: string
          id?: string
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      template: {
        Row: {
          createdAt: string
          id: string
          template_data: Json[] | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          template_data?: Json[] | null
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          template_data?: Json[] | null
          updatedAt?: string
        }
        Relationships: []
      }
      template_image: {
        Row: {
          createdAt: string
          image_id: string
          template_id: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          image_id: string
          template_id: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          image_id?: string
          template_id?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "template_image_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "template_image_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "template"
            referencedColumns: ["id"]
          },
        ]
      }
      template_video: {
        Row: {
          createdAt: string
          template_id: string
          updatedAt: string
          video_id: string
        }
        Insert: {
          createdAt?: string
          template_id: string
          updatedAt: string
          video_id: string
        }
        Update: {
          createdAt?: string
          template_id?: string
          updatedAt?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "template_video_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "template"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "template_video_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "video"
            referencedColumns: ["id"]
          },
        ]
      }
      vectors: {
        Row: {
          createdAt: string
          description: string
          format: string
          height: number
          id: string
          license: string
          likes: number
          name: string
          orientation: string
          serial_no: number
          shares: number
          updatedAt: string
          width: number
        }
        Insert: {
          createdAt?: string
          description: string
          format: string
          height: number
          id: string
          license: string
          likes: number
          name: string
          orientation: string
          serial_no?: number
          shares: number
          updatedAt: string
          width: number
        }
        Update: {
          createdAt?: string
          description?: string
          format?: string
          height?: number
          id?: string
          license?: string
          likes?: number
          name?: string
          orientation?: string
          serial_no?: number
          shares?: number
          updatedAt?: string
          width?: number
        }
        Relationships: []
      }
      vectors_category: {
        Row: {
          category_id: string
          createdAt: string
          updatedAt: string
          vector_id: string
        }
        Insert: {
          category_id: string
          createdAt?: string
          updatedAt: string
          vector_id: string
        }
        Update: {
          category_id?: string
          createdAt?: string
          updatedAt?: string
          vector_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vectors_category_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vectors_category_vector_id_fkey"
            columns: ["vector_id"]
            isOneToOne: false
            referencedRelation: "vectors"
            referencedColumns: ["id"]
          },
        ]
      }
      vectors_tag: {
        Row: {
          createdAt: string
          tag_id: string
          updatedAt: string
          vector_id: string
        }
        Insert: {
          createdAt?: string
          tag_id: string
          updatedAt: string
          vector_id: string
        }
        Update: {
          createdAt?: string
          tag_id?: string
          updatedAt?: string
          vector_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vectors_tag_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vectors_tag_vector_id_fkey"
            columns: ["vector_id"]
            isOneToOne: false
            referencedRelation: "vectors"
            referencedColumns: ["id"]
          },
        ]
      }
      vectors_url: {
        Row: {
          createdAt: string
          description: string
          format: string
          height: number
          license: string
          likes: number
          name: string
          orientation: string
          serial_no: number
          shares: number
          updatedAt: string
          url: string
          vector_id: string
          width: number
        }
        Insert: {
          createdAt?: string
          description: string
          format: string
          height: number
          license: string
          likes: number
          name: string
          orientation: string
          serial_no?: number
          shares: number
          updatedAt: string
          url: string
          vector_id: string
          width: number
        }
        Update: {
          createdAt?: string
          description?: string
          format?: string
          height?: number
          license?: string
          likes?: number
          name?: string
          orientation?: string
          serial_no?: number
          shares?: number
          updatedAt?: string
          url?: string
          vector_id?: string
          width?: number
        }
        Relationships: [
          {
            foreignKeyName: "vectors_url_vector_id_fkey"
            columns: ["vector_id"]
            isOneToOne: true
            referencedRelation: "vectors"
            referencedColumns: ["id"]
          },
        ]
      }
      video: {
        Row: {
          createdAt: string
          id: string
          updatedAt: string
          video_name: string
        }
        Insert: {
          createdAt?: string
          id: string
          updatedAt: string
          video_name: string
        }
        Update: {
          createdAt?: string
          id?: string
          updatedAt?: string
          video_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
